System.register(['@angular/core', '@angular/http', './kbase-auth.service', '../services/kbase-config.service', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, kbase_auth_service_1, kbase_config_service_1, Observable_1;
    var KBaseRpc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            },
            function (kbase_config_service_1_1) {
                kbase_config_service_1 = kbase_config_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            KBaseRpc = class KBaseRpc {
                constructor(http, auth, config) {
                    this.http = http;
                    this.auth = auth;
                    this.config = config;
                }
                call(service, method, params, isOrdered, authToken) {
                    let headers = new http_1.Headers({ 'Authorization': authToken ? authToken : this.auth.token });
                    let options = new http_1.RequestOptions({ headers: headers });
                    var args = {
                        version: "1.1",
                        id: String(Math.random()).slice(5),
                        params: params ? (isOrdered ? params : [params]) : []
                    };
                    if (service === 'njs') {
                        args['method'] = 'NarrativeJobService.' + method;
                        var endpoint = this.config.getConfig().services.narrative_job_service.url;
                    }
                    else if (service === 'ujs') {
                        args['method'] = 'UserAndJobState.' + method;
                        var endpoint = this.config.getConfig().services.user_job_state.url;
                    }
                    else if (service === 'ws') {
                        args['method'] = 'Workspace.' + method;
                        var endpoint = this.config.getConfig().services.workspace.url;
                    }
                    else {
                        console.error("Can't make RPC call: invalid service abbreviation. Was given:", service);
                        return;
                    }
                    let body = JSON.stringify(args);
                    return this.http.post(endpoint, body, options)
                        .map(res => { return res.json().result[0]; })
                        .catch(this.handleError);
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            KBaseRpc = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, kbase_auth_service_1.KBaseAuth, kbase_config_service_1.KBaseConfig])
            ], KBaseRpc);
            exports_1("KBaseRpc", KBaseRpc);
        }
    }
});
//# sourceMappingURL=kbase-rpc.service.js.map