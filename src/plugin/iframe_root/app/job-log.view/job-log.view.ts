import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { JobService } from '../services/job.service';

const cssTemplate = `
pre {
    background-color: #fff;
    line-height: 0;
    counter-reset: line;
    white-space: pre-wrap;
}
card.job-log {
    padding: 0 20px;
}
pre .line {
    display: block;
    line-height: 1.5em;
}
pre line::before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    border-right: 1px solid #ddd;
    padding: 0 0.5em;
    margin-right: 0.5em;
    color: #888;
}`

const htmlTemplate = `
<card class="job-log">
    <h3>Job Log View {{id}}</h3>
    <hr>
    <br>
    <pre>
        <div class="line" *ngFor="let line of output">{{line}}</div>
    </pre>
    <md-progress-circle *ngIf="loading" mode="indeterminate"></md-progress-circle>
</card>`

@Component({
    template: htmlTemplate,
    styles: [cssTemplate],
    providers: [
        JobService
    ]
})


export class JobLogView implements OnInit {
    loading: boolean = false;
    id: string;
    output = [];

    constructor(route: ActivatedRoute, private jobService: JobService) {
        route.params.subscribe(params => this.id = params['id'] )
     }

    ngOnInit() {
        this.loadStatus()
    }

    private loadStatus() {
        this.loading = true;

        this.jobService.getJobLogs(this.id)
            .subscribe(res => {
                res.lines.forEach(line => {
                    this.output.push( line.line+'\n' );
                });
                this.loading = false;
            })
    }

}