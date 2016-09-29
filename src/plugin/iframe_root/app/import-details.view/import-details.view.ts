import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { JobService } from '../services/job.service';

const htmlTemplate = `
<card>
    <h4>Job Details for Import {{id}}</h4>
    <table class="table">
        <thead>
            <tr>
                <th>Job ID</th>
                <th>AWE ID</th>
                <th>Status</th>

                <th>Submit Time</th>
                <th>Start Time</th>
                <th>Finish Time</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let job of jobs">
                <td>{{job.job_id}}</td>
                <td>{{job.awe_job_id.split('-')[0]+'...'}}</td>
                <td>{{job.job_state}}</td>

                <td>{{job.creation_time | elapsedTime}}</td>
                <td>{{job.exec_start_time | elapsedTime}}</td>
                <td>{{job.finish_time | elapsedTime}}</td>
                <td><a [routerLink]="['/job-log', job.job_id]">view log</a></td>
            </tr>
        </tbody>
    </table>
    <md-progress-circle *ngIf="loading" mode="indeterminate"></md-progress-circle>
</card>
`

@Component({
    template: htmlTemplate,
    providers: [
        JobService
    ]
})


export class ImportDetailsView implements OnInit {
    id: string;
    loading: boolean = false;
    jobs;

    constructor(route: ActivatedRoute, private jobService: JobService) {
        route.params.subscribe(params => this.id = params['id'] )
    }

    ngOnInit() {
        this.loadStatus()
    }


    private loadStatus() {
        this.loading = true;

        // Fetch import jobs and filter out any jobs with non-leginimate-looking ids
        // next get individual job status
        // Note: a service would be very useful here.
        this.jobService.getJobInfo(this.id)
            .subscribe(jobInfo => {
                let jobIds = jobInfo[12].split(',')

                this.jobService.checkJobs(jobIds)
                    .subscribe(jobs => {
                        this.jobs = jobs;
                        this.loading = false;
                    })

            })
    }

}