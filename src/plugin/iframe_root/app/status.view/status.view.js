System.register(['@angular/core', '@angular/common', '../services/job.service', '../services/ftp.service', '../services/workspace.service', '../services/util', '../services/kbase-config.service', '../services/pipes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, job_service_1, ftp_service_1, workspace_service_1, util_1, kbase_config_service_1, pipes_1;
    var cssTemplate, htmlTemplate, StatusView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            },
            function (workspace_service_1_1) {
                workspace_service_1 = workspace_service_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (kbase_config_service_1_1) {
                kbase_config_service_1 = kbase_config_service_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            }],
        execute: function() {
            cssTemplate = `
.last-updated {
    margin-right: 10px;
}`;
            htmlTemplate = `<div>
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
</card>`;
            StatusView = class StatusView {
                constructor(jobService, wsService, ftpService, _location, util, config) {
                    this.jobService = jobService;
                    this.wsService = wsService;
                    this.ftpService = ftpService;
                    this._location = _location;
                    this.util = util;
                    this.config = config;
                    this.loading = false;
                    this.jobStatusByImportId = {};
                    this.narrativeUrl = config.getConfig().services.narrative.url;
                }
                ngOnInit() {
                    this.loadStatus();
                }
                reload() {
                    this.loadStatus();
                }
                loadStatus() {
                    this.loading = true;
                    let narrativeObjIds = [];
                    // Fetch import jobs and filter out any jobs with non-leginimate-looking ids
                    // next get individual job status
                    // Note: a service would be very useful here.
                    this.ftpService.listImports()
                        .subscribe(res => {
                        let realImports = [];
                        for (let i = 0; i < res.length; i++) {
                            let jobInfo = res[i];
                            let jobIds = jobInfo[12].split(',');
                            let parsedId = jobInfo[1].split('.');
                            let wsId = parsedId[1], objId = parsedId[3];
                            // ensure valid job ids for testing purposes
                            if (jobIds[0].length !== 24)
                                continue;
                            realImports.push(res[i]);
                            if (!wsId && !objId)
                                continue;
                            // add narrative destination to list to request
                            // for actual narrative names.
                            narrativeObjIds.push({
                                wsid: wsId,
                                objid: objId
                            });
                        }
                        // add unix timestamp
                        realImports.forEach((item, i) => realImports[i].timestamp = Date.parse(realImports[i][3]));
                        // sort asc
                        realImports.sort((a, b) => {
                            if (a.timestamp < b.timestamp)
                                return 1;
                            else if (a.timestamp > b.timestamp)
                                return -1;
                        });
                        this.imports = realImports;
                        this.getIndividualJobStatus(this.imports);
                    });
                }
                getIndividualJobStatus(importMetas) {
                    importMetas.forEach(importMeta => {
                        let importId = importMeta[0];
                        let jobIds = importMeta[12].split(',');
                        this.jobService.checkJobs(jobIds)
                            .subscribe(res => {
                            let counts = { queued: 0, inProgress: 0, completed: 0, suspend: 0 };
                            for (var key in res) {
                                let jobStatus = res[key];
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
                            };
                            this.lastUpdated = this.util.getClockTime();
                            this.loading = false;
                        });
                    });
                }
                getRelativeTime(time) {
                    let timestamp = Date.parse(time);
                    return new pipes_1.ElapsedTime().transform(timestamp);
                }
                // special helper to simplify template of "Status" column
                getStatusHtml(id) {
                    let counts = this.jobStatusByImportId[id].counts;
                    let status = [];
                    if (counts.queued)
                        status.push('<span class="queued"><b>' + counts.queued + '</b> queued</span>');
                    if (counts.inProgress)
                        status.push('<span class="in-progress"><b>' + counts.inProgress + '</b> in progress</span>');
                    if (counts.completed)
                        status.push('<span class="completed"><b>' + counts.completed + '</b> completed</span>');
                    if (counts.suspend)
                        status.push('<span class="suspended"><b>' + counts.suspend + '</b> suspended</span>');
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
                        console.log('res', res);
                        this.reload();
                    });
                }
                goBack() {
                    this._location.back();
                }
            };
            StatusView = __decorate([
                core_1.Component({
                    template: htmlTemplate,
                    styles: [cssTemplate],
                    providers: [
                        job_service_1.JobService,
                        workspace_service_1.WorkspaceService,
                        common_1.Location,
                        util_1.Util
                    ]
                }), 
                __metadata('design:paramtypes', [job_service_1.JobService, workspace_service_1.WorkspaceService, ftp_service_1.FtpService, common_1.Location, util_1.Util, kbase_config_service_1.KBaseConfig])
            ], StatusView);
            exports_1("StatusView", StatusView);
        }
    }
});
//# sourceMappingURL=status.view.js.map