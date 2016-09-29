System.register(['@angular/core', './kbase-rpc.service', './kbase-auth.service'], function(exports_1, context_1) {
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
    var core_1, kbase_rpc_service_1, kbase_auth_service_1;
    var WorkspaceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (kbase_rpc_service_1_1) {
                kbase_rpc_service_1 = kbase_rpc_service_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            }],
        execute: function() {
            WorkspaceService = class WorkspaceService {
                constructor(rpc, auth) {
                    this.rpc = rpc;
                    this.auth = auth;
                }
                listNarratives() {
                    return this.rpc.call('ws', 'list_workspace_info', { excludeGlobal: 1 })
                        .map(res => {
                        let narrativeSpaces = [];
                        res.forEach(ws => {
                            let meta = ws[8];
                            if ('narrative_nice_name' in meta) {
                                narrativeSpaces.push({
                                    name: meta.narrative_nice_name,
                                    narrativeId: parseInt(ws[8].narrative),
                                    wsId: ws[0],
                                    wsName: ws[1]
                                });
                            }
                        });
                        return narrativeSpaces;
                    });
                }
                getObjectInfos(objIds) {
                    return this.rpc.call('ws', 'get_object_info_new', { objects: objIds });
                }
            };
            WorkspaceService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [kbase_rpc_service_1.KBaseRpc, kbase_auth_service_1.KBaseAuth])
            ], WorkspaceService);
            exports_1("WorkspaceService", WorkspaceService);
        }
    }
});
//# sourceMappingURL=workspace.service.js.map