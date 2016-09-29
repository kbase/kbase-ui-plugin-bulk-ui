System.register(['@angular/core', 'rxjs/Rx', './kbase-rpc.service', './kbase-auth.service'], function(exports_1, context_1) {
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
    var core_1, Rx_1, kbase_rpc_service_1, kbase_auth_service_1;
    var JobService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (kbase_rpc_service_1_1) {
                kbase_rpc_service_1 = kbase_rpc_service_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            }],
        execute: function() {
            JobService = class JobService {
                constructor(rpc, auth) {
                    this.rpc = rpc;
                    this.auth = auth;
                    this.ftpRoot = '/data/bulktest';
                }
                runGenomeTransform(f, workspace) {
                    console.log('file', f);
                    let params = {
                        method: "genome_transform.genbank_to_genome",
                        service_ver: 'dev',
                        params: [{
                                genbank_file_path: this.ftpRoot + f.path,
                                workspace: workspace,
                                genome_id: f.meta.importName,
                                contigset_id: f.meta['contigsetName']
                            }]
                    };
                    return this.rpc.call('njs', 'run_job', params);
                }
                runGenomeTransforms(files, workspace) {
                    var reqs = [];
                    files.forEach(file => reqs.push(this.runGenomeTransform(file, workspace)));
                    return Rx_1.Observable.forkJoin(reqs);
                }
                runReadsImport(f, workspace) {
                    console.log('file', f);
                    let params = {
                        method: "genome_transform.reads_to_assembly",
                        service_ver: 'dev',
                        params: [{
                                workspace: workspace,
                                reads_id: f.meta.importName,
                                reads_type: f['paths'] ? 'PairedEndLibrary' : 'SingleEndLibrary',
                                file_path_list: f['paths'] ? f['paths'] : [this.ftpRoot + f.path],
                                insert_size: f.meta['insert_size'],
                                std_dev: f.meta['std_dev'],
                                sra: f.meta['sra'] ? "1" : "0" // expects strings instead of booleans
                            }]
                    };
                    return this.rpc.call('njs', 'run_job', params);
                }
                runReadsImports(files, workspace) {
                    var reqs = [];
                    files.forEach(file => reqs.push(this.runReadsImport(file, workspace)));
                    return Rx_1.Observable.forkJoin(reqs);
                }
                // special method that is not implemented in service
                listImports() {
                    let user = 'bulkio';
                    console.log('calling list jobs with user:', user);
                    return this.rpc.call('ujs', 'list_jobs', [[user], ''], true);
                }
                createImportJob(jobIds, wsId, narrativeId) {
                    console.log('creating import job', jobIds);
                    return this.rpc.call('ujs', 'create_and_start_job', [this.auth.token, 'ws.' + wsId + '.obj.' + narrativeId, jobIds.join(','),
                        { ptype: 'percent' }, '9999-04-03T08:56:32+0000'], true);
                }
                checkJob(jobId) {
                    return this.rpc.call('njs', 'check_job', [jobId], true);
                }
                checkJobs(jobIds) {
                    var reqs = [];
                    jobIds.forEach(jobId => reqs.push(this.checkJob(jobId)));
                    return Rx_1.Observable.forkJoin(reqs);
                }
                // this must be used in conjunction with the
                // fake jobs (which are created to store meta)
                getJobInfo(jobId) {
                    return this.rpc.call('ujs', 'get_job_info', [jobId], true);
                }
                getJobLogs(jobId) {
                    return this.rpc.call('njs', 'get_job_logs', { job_id: jobId, skip_lines: 0 });
                }
                deleteJob(jobId) {
                    // uses special bulkio token
                    return this.rpc.call('ujs', 'force_delete_job', [this.auth.getToken(), jobId], true);
                }
                deleteJobs(jobIds) {
                    var reqs = [];
                    jobIds.forEach(id => reqs.push(this.deleteJob(id)));
                    return Rx_1.Observable.forkJoin(reqs);
                }
                /**
                 *  Unused methods
                 */
                setState(jobId) {
                    return this.rpc.call('ujs', 'set_state', ['bulkupload', jobId, ''], true);
                }
                listState() {
                    return this.rpc.call('ujs', 'list_state', ['bulkupload', 0], true);
                }
                getJobParams(jobId) {
                    return this.rpc.call('njs', 'get_job_params', [jobId], true);
                }
            };
            JobService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [kbase_rpc_service_1.KBaseRpc, kbase_auth_service_1.KBaseAuth])
            ], JobService);
            exports_1("JobService", JobService);
        }
    }
});
//# sourceMappingURL=job.service.js.map