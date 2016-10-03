System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/Subject', 'rxjs/BehaviorSubject', 'rxjs/add/operator/map', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', './kbase-integration.service', '../services/kbase-auth.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, Subject_1, BehaviorSubject_1, kbase_integration_service_1, kbase_auth_service_1;
    var FtpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (kbase_integration_service_1_1) {
                kbase_integration_service_1 = kbase_integration_service_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            }],
        execute: function() {
            FtpService = class FtpService {
                constructor(http, auth, integration) {
                    this.http = http;
                    this.auth = auth;
                    this.integration = integration;
                    this.selectedFiles = []; // files selected in UI
                    this.selectedSets = []; // files selected in UI
                    this.files = {}; // file lists loaded and cached
                    this.selectedPath = new Subject_1.Subject();
                    this.selectedFileCount = new Subject_1.Subject();
                    this.selectedSetCount = new Subject_1.Subject();
                    this.selectedType = new BehaviorSubject_1.BehaviorSubject(false);
                    this.selectedPath$ = this.selectedPath.asObservable();
                    this.selectedFileCount$ = this.selectedFileCount.asObservable();
                    this.selectedSetCount$ = this.selectedSetCount.asObservable();
                    this.selectedType$ = this.selectedType.asObservable();
                    let headers = new http_1.Headers({ 'Authorization': auth.getToken() });
                    this.reqOptions = new http_1.RequestOptions({ headers: headers });
                    this.ftpUrl = integration.getConfig().services.ftp.url;
                    this.selectedFolder = {
                        name: integration.getUsername(),
                        path: '/' + integration.getUsername()
                    };
                }
                getRootDirectory() {
                    return this.integration.getConfig().services.ftp.root;
                }
                list(path) {
                    path = path ? path : '/' + this.integration.getUsername();
                    return this.http.get(this.ftpUrl + '/list/' + path, this.reqOptions)
                        .map(res => {
                        let files = [], folders = [];
                        res.json().forEach(file => {
                            if (file.isFolder)
                                folders.push(file);
                            else
                                files.push(file);
                        });
                        // crud sorting, for now
                        folders.sort((a, b) => { return b.mtime - a.mtime; });
                        files.sort((a, b) => { return b.mtime - a.mtime; });
                        return folders.concat(files);
                    })
                        .do(files => this.files[path] = files)
                        .catch(this.handleError);
                }
                // UJS import job state
                listImports() {
                    return this.http.get(this.ftpUrl + '/import-jobs', this.reqOptions)
                        .map(result => {
                        return result.json().result;
                    })
                        .catch(this.handleError);
                }
                createImportJob(jobIds, wsId, narrativeId) {
                    console.log('creating import job', jobIds);
                    let data = {
                        narrativeObjectId: 'ws.' + wsId + '.obj.' + narrativeId,
                        jobIds: jobIds
                    };
                    let headers = new http_1.Headers({
                        'Authorization': this.auth.getToken(),
                        'Content-Type': 'application/json'
                    });
                    var reqOptions = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.ftpUrl + '/import-jobs', JSON.stringify(data), reqOptions)
                        .map(result => {
                        return result.json().result;
                    })
                        .catch(this.handleError);
                }
                deleteImport(jobId) {
                    return this.http.delete(this.ftpUrl + '/import-job/' + jobId, this.reqOptions)
                        .map(result => {
                        console.log('deleted import job', result);
                        return result.json().result;
                    })
                        .catch(this.handleError);
                }
                deleteImports(jobIds) {
                    var reqs = jobIds.map((id) => { return this.deleteImport(id); });
                    return Observable_1.Observable.forkJoin(reqs);
                }
                getImportInfo(jobId) {
                    return this.http.get(this.ftpUrl + '/import-job/' + jobId, this.reqOptions)
                        .map(result => {
                        console.log('fetched import job info', result);
                        return result.json().result;
                    })
                        .catch(this.handleError);
                }
                //deleteJob(jobId: string) {
                // uses special bulkio token
                //    return this.rpc.call('ujs', 'force_delete_job', [this.auth.getToken(), jobId], true)
                //}
                //deleteJobs(jobIds: string[]) {
                //    var reqs = [];
                //    jobIds.forEach(id => reqs.push( this.deleteJob(id) ) )
                //    return Observable.forkJoin(reqs)
                //}
                setPath(path) {
                    this.selectedPath.next(path);
                }
                getPath() {
                    return this.selectedPath;
                }
                addToCache(files, path) {
                    let existing = this.files[path];
                    // remove any existing from model
                    files.forEach(f => {
                        let i = existing.length;
                        while (i--) {
                            if (existing[i].name === f.name)
                                existing.splice(i, 1);
                        }
                    });
                    // throw at top for now (until angular table is complete)
                    this.files[path] = files.concat(existing);
                    return this.files[path];
                }
                selectFile(file) {
                    this.selectedFiles.push(file);
                    this.selectedFileCount.next(this.selectedFiles.length);
                }
                unselectFile(file) {
                    this.selectedFiles = this.selectedFiles.filter(f => {
                        if (f.path != file.path)
                            return true;
                    });
                    this.selectedFileCount.next(this.selectedFiles.length);
                    return this.selectedFiles;
                }
                selectType(type) {
                    this.selectedType.next(type);
                }
                addSet() {
                    if (!this.selectedFiles.length)
                        return;
                    this.selectedSets.push(this.selectedFiles);
                    this.selectedSetCount.next(this.selectedSets.length);
                    this.selectedFileCount.next(0);
                }
                clearSelected() {
                    this.selectedFiles = [];
                    this.selectedFileCount.next(0);
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            FtpService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, kbase_auth_service_1.KBaseAuth, kbase_integration_service_1.KBaseIntegration])
            ], FtpService);
            exports_1("FtpService", FtpService);
        }
    }
});
//# sourceMappingURL=ftp.service.js.map