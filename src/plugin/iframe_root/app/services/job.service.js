System.register(["@angular/core", "rxjs/Rx", "./kbase-rpc.service", "./kbase-auth.service", "./ftp.service"], function (exports_1, context_1) {
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
    var core_1, Rx_1, kbase_rpc_service_1, kbase_auth_service_1, ftp_service_1, JobService;
    return {
        setters: [
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
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            }
        ],
        execute: function () {
            JobService = class JobService {
                constructor(rpc, auth, ftp) {
                    this.rpc = rpc;
                    this.auth = auth;
                    this.ftp = ftp;
                }
                runGenomeTransform(f, workspace) {
                    let params = {
                        method: "genome_transform.genbank_to_genome",
                        service_ver: 'dev',
                        params: [{
                                genbank_file_path: this.ftp.getRootDirectory() + f.path,
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
                    let params = {
                        method: 'genome_transform.' +
                            (f.meta['sra'] ? 'sra_reads_to_assembly' : 'reads_to_assembly'),
                        service_ver: 'dev',
                        params: [{
                                workspace: workspace,
                                reads_id: f.meta.importName,
                                reads_type: f['paths'] ? 'PairedEndLibrary' : 'SingleEndLibrary',
                                file_path_list: f['paths'] ? f['paths'] : [this.ftp.getRootDirectory() + f.path],
                                insert_size: f.meta['insert_size'],
                                std_dev: f.meta['std_dev']
                            }]
                    };
                    return this.rpc.call('njs', 'run_job', params);
                }
                runReadsImports(files, workspace) {
                    var reqs = [];
                    files.forEach(file => reqs.push(this.runReadsImport(file, workspace)));
                    return Rx_1.Observable.forkJoin(reqs);
                }
                runLibraryImport(f, workspace) {
                    let params = {
                        method: 'genome_transform.' +
                            (f.meta['sra'] ? 'sra_reads_to_assembly' : 'reads_to_library'),
                        service_ver: 'dev',
                        params: [{
                                wsname: workspace,
                                name: f.meta.importName,
                                int: 0,
                                reads_orientation_outward: 0,
                                single_genome: 0,
                                sequencing_tech: f.meta['sequencing_tech'],
                                strain: f.meta['strain'],
                                source: f.meta['source'],
                                reads_type: f['paths'] ? 'PairedEndLibrary' : 'SingleEndLibrary',
                                file_path_list: f['paths'] ? f['paths'] : [this.ftp.getRootDirectory() + f.path],
                                insert_size_mean: f.meta['insert_size'],
                                insert_size_std_dev: f.meta['std_dev']
                            }]
                    };
                    return this.rpc.call('njs', 'run_job', params);
                }
                runLibraryImports(files, workspace) {
                    var reqs = [];
                    files.forEach(file => reqs.push(this.runLibraryImport(file, workspace)));
                    return Rx_1.Observable.forkJoin(reqs);
                }
                checkJob(jobId) {
                    return this.rpc.call('njs', 'check_job', [jobId], true);
                }
                checkJobs(jobIds) {
                    var reqs = [];
                    jobIds.forEach(jobId => reqs.push(this.checkJob(jobId)));
                    return Rx_1.Observable.forkJoin(reqs);
                }
                getJobLogs(jobId) {
                    return this.rpc.call('njs', 'get_job_logs', { job_id: jobId, skip_lines: 0 });
                }
                /**
                 *  Unused methods
                 */
                //setState(jobId: string){
                //    return this.rpc.call('ujs', 'set_state', ['bulkupload', jobId, ''], true)
                //}
                //listState() {
                //    return this.rpc.call('ujs', 'list_state', ['bulkupload', 0], true)
                //}
                getJobParams(jobId) {
                    return this.rpc.call('njs', 'get_job_params', [jobId], true);
                }
            };
            JobService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [kbase_rpc_service_1.KBaseRpc,
                    kbase_auth_service_1.KBaseAuth,
                    ftp_service_1.FtpService])
            ], JobService);
            exports_1("JobService", JobService);
        }
    };
});
//# sourceMappingURL=job.service.js.map