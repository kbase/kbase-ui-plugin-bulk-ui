System.register(["@angular/core", "@angular/router", "../services/job.service", "../services/ftp.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, job_service_1, ftp_service_1, htmlTemplate, ImportDetailsView;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
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
`;
            ImportDetailsView = class ImportDetailsView {
                constructor(route, jobService, ftpService) {
                    this.jobService = jobService;
                    this.ftpService = ftpService;
                    this.loading = false;
                    route.params.subscribe(params => this.id = params['id']);
                }
                ngOnInit() {
                    this.loadStatus();
                }
                loadStatus() {
                    this.loading = true;
                    // Fetch import jobs and filter out any jobs with non-leginimate-looking ids
                    // next get individual job status
                    // Note: a service would be very useful here.
                    this.ftpService.getImportInfo(this.id)
                        .subscribe(jobInfo => {
                        let jobIds = jobInfo[12].split(',');
                        this.jobService.checkJobs(jobIds)
                            .subscribe(jobs => {
                            this.jobs = jobs;
                            this.loading = false;
                        });
                    });
                }
            };
            ImportDetailsView = __decorate([
                core_1.Component({
                    template: htmlTemplate,
                    providers: [
                        job_service_1.JobService
                    ]
                }),
                __metadata("design:paramtypes", [router_1.ActivatedRoute,
                    job_service_1.JobService,
                    ftp_service_1.FtpService])
            ], ImportDetailsView);
            exports_1("ImportDetailsView", ImportDetailsView);
        }
    };
});
//# sourceMappingURL=import-details.view.js.map