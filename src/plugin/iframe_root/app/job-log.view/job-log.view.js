System.register(['@angular/core', '@angular/router', '../services/job.service'], function(exports_1, context_1) {
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
    var core_1, router_1, job_service_1;
    var cssTemplate, htmlTemplate, JobLogView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            }],
        execute: function() {
            cssTemplate = `
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
}`;
            htmlTemplate = `
<card class="job-log">
    <h3>Job Log View {{id}}</h3>
    <hr>
    <br>
    <pre>
        <div class="line" *ngFor="let line of output">{{line}}</div>
    </pre>
    <md-progress-circle *ngIf="loading" mode="indeterminate"></md-progress-circle>
</card>`;
            JobLogView = class JobLogView {
                constructor(route, jobService) {
                    this.jobService = jobService;
                    this.loading = false;
                    this.output = [];
                    route.params.subscribe(params => this.id = params['id']);
                }
                ngOnInit() {
                    this.loadStatus();
                }
                loadStatus() {
                    this.loading = true;
                    this.jobService.getJobLogs(this.id)
                        .subscribe(res => {
                        res.lines.forEach(line => {
                            this.output.push(line.line + '\n');
                        });
                        this.loading = false;
                    });
                }
            };
            JobLogView = __decorate([
                core_1.Component({
                    template: htmlTemplate,
                    styles: [cssTemplate],
                    providers: [
                        job_service_1.JobService
                    ]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, job_service_1.JobService])
            ], JobLogView);
            exports_1("JobLogView", JobLogView);
        }
    }
});
//# sourceMappingURL=job-log.view.js.map