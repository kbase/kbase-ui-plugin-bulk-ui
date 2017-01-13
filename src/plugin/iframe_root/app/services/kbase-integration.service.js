/*
 *  Class to handle integration with the host environment.
 *
 */
System.register(["@angular/core", "@angular/router", "../../kbase/iframe-kbase-integration"], function (exports_1, context_1) {
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
    var core_1, router_1, iframe_kbase_integration_1, KBaseIntegration;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (iframe_kbase_integration_1_1) {
                iframe_kbase_integration_1 = iframe_kbase_integration_1_1;
            }
        ],
        execute: function () {/*
             *  Class to handle integration with the host environment.
             *
             */
            KBaseIntegration = class KBaseIntegration {
                //config: any;
                //token: string;
                //username: string;
                constructor(router) {
                    this.router = router;
                    this.integration = new iframe_kbase_integration_1.KBase();
                }
                // methods for all interfaces to kbase.
                getConfig() {
                    return iframe_kbase_integration_1.KBase.config;
                }
                getToken() {
                    return iframe_kbase_integration_1.KBase.token;
                }
                getUsername() {
                    return iframe_kbase_integration_1.KBase.username;
                }
                isLoggedIn() {
                    if (iframe_kbase_integration_1.KBase.token) {
                        return true;
                    }
                    return false;
                }
            };
            KBaseIntegration = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [router_1.Router])
            ], KBaseIntegration);
            exports_1("KBaseIntegration", KBaseIntegration);
        }
    };
});
//# sourceMappingURL=kbase-integration.service.js.map