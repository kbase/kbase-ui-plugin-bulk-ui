import { Component} from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { JobService } from '../services/job.service'
import { FtpService } from '../services/ftp.service'
import { WorkspaceService } from '../services/workspace.service'
import { Util } from '../services/util';
import { KBaseConfig } from '../services/kbase-config.service';
import {ElapsedTime} from '../services/pipes';

const cssTemplate = `
.last-updated {
    margin-right: 10px;
}`

const htmlTemplate = `<div>
    <div class="help-text inline">Your Import Status</div>
</div>
<card>
    <div class="pull-right">
        <span *ngIf="lastUpdated" class="last-updated">
            Status as of {{lastUpdated}}
        </span>
        <button md-fab
            (click)="reload()"
            [disabled]="loading"
            color="primary">

            <i *ngIf="!loading" class="material-icons md-24">refresh</i>
            <span *ngIf="loading">...</span>
        </button>
   </div>
    <table class="table">
        <thead>
            <tr>
                <th>Bulk Import ID</th>
                <th>Narrative</th>
                <th>File Count</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let meta of imports">
                <td>{{meta[0]}}</td>
                <td>
                    <a href="{{narrativeUrl}}/{{meta[4]}}" target="_blank">
                        view narrative
                    </a>
                </td>
                <td>{{meta[12].split(',').length}}</td>
                <td>{{getRelativeTime(meta[3])}}</td>
                <td>
                    <div *ngIf="jobStatusByImportId[meta[0]]" >
                        <span [innerHTML]="getStatusHtml(meta[0])"></span>
                    </div>
                </td>
                <td>
                    <a [routerLink]="['/import-details', meta[0]]">
                        view details
                    </a>
                    <a (click)="deleteJob(meta)" class="text-muted pointer">
                        <i class="material-icons">delete</i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</card>`

@Component({
    template: htmlTemplate,
    styles: [cssTemplate],
    providers: [
        JobService,
        WorkspaceService,
        Location,
        Util
    ]
})
export class StatusView {
    lastUpdated: string;
    loading: boolean = false;
    narrativeUrl: string;

    imports;
    errorMessage;
    jobStatusByImportId = {};


    constructor(private jobService: JobService,
                private wsService: WorkspaceService,
                private ftpService: FtpService,
                private _location: Location,
                private util: Util,
                private config: KBaseConfig) {
        this.narrativeUrl = config.getConfig().services.narrative.url;
    }


    ngOnInit() {
        this.loadStatus()
    }

    reload() {
        this.loadStatus();
    }

    private loadStatus() {
        this.loading = true;
        let narrativeObjIds = []

        // Fetch import jobs and filter out any jobs with non-leginimate-looking ids
        // next get individual job status
        // Note: a service would be very useful here.
        this.ftpService.listImports()
            .subscribe(res => {
                let realImports = [];
                for (let i=0; i<res.length; i++) {
                    let jobInfo = res[i];
                    let jobIds = jobInfo[12].split(',');

                    let parsedId = jobInfo[1].split('.');
                    let wsId = parsedId[1],
                        objId = parsedId[3];

                    // ensure valid job ids for testing purposes
                    if (jobIds[0].length !== 24) continue;

                    realImports.push(res[i]);

                    if (!wsId && !objId) continue;

                    // add narrative destination to list to request
                    // for actual narrative names.
                    narrativeObjIds.push({
                        wsid: wsId,
                        objid: objId
                    })
                }

                // add unix timestamp
                realImports.forEach((item, i) => realImports[i].timestamp = Date.parse(realImports[i][3]) )

                // sort asc
                realImports.sort((a, b) => {
                    if (a.timestamp < b.timestamp) return 1;
                    else if (a.timestamp > b.timestamp) return -1;
                })

                this.imports = realImports;

                this.getIndividualJobStatus(this.imports);
            })
    }


    private getIndividualJobStatus(importMetas) {
        importMetas.forEach(importMeta => {
            let importId = importMeta[0];
            let jobIds = importMeta[12].split(',');

            this.jobService.checkJobs(jobIds)
                .subscribe(res => {
                    let counts = {queued: 0, inProgress: 0, completed: 0, suspend: 0};
                    for (var key in res) {
                        let jobStatus = (res[key] as any);
                        if (jobStatus.job_state === 'queued')
                            counts.queued += 1;
                        else if (jobStatus.job_state === 'in-progress')
                            counts.inProgress += 1;
                        else if (jobStatus.job_state === 'completed')
                            counts.completed += 1;
                        else if (jobStatus.job_state === 'suspend')
                            counts.suspend += 1;
                    }

                    this.jobStatusByImportId[importId] = {
                        jobStatuses: res,
                        counts: counts
                    }

                    this.lastUpdated = this.util.getClockTime();
                    this.loading = false;
                })
        })
    }

    getRelativeTime(time) {
        let timestamp = Date.parse(time);
        return new ElapsedTime().transform(timestamp);
    }

    // special helper to simplify template of "Status" column
    getStatusHtml(id: string) {
        let counts = this.jobStatusByImportId[id].counts;

        let status = [];

        if (counts.queued)
            status.push('<span class="queued"><b>'+counts.queued+'</b> queued</span>');
        if (counts.inProgress)
            status.push('<span class="in-progress"><b>'+counts.inProgress+'</b> in progress</span>');
        if (counts.completed)
            status.push('<span class="completed"><b>'+counts.completed+'</b> completed</span>');
        if (counts.suspend)
            status.push('<span class="suspended"><b>'+counts.suspend+'</b> suspended</span>');

        return status.join(', ');
    }

    // delete fake import job, along with associated jobs
    deleteJob(meta) {
        // "real" jobs are not deletable, so don't even try.
        // we just remove the ujs record which holds the job ids
        // for the bulkio service.
        //let jobIds = meta[12].split(',');
        //jobIds.push(meta[0]); // delete all ids, including import job

        //console.log('deleting', meta)
        //console.log('ids', jobIds)
        this.ftpService.deleteImport(meta[0])
            .subscribe(res => {
                this.reload();
            })
    }

    goBack() {
        this._location.back()
    }
}