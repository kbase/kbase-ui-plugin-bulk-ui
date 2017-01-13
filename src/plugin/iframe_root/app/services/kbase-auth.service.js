/*
 *  Class to handle token and login/logout actions
 *
 *  Notes:
 *    - We don't need to retrieve tokens as this is
 *      handled by https://narrative.kbase.us/#login
 */
System.register(["@angular/core", "@angular/router", "./kbase-integration.service"], function (exports_1, context_1) {
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
    var core_1, router_1, kbase_integration_service_1, KBaseAuth;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (kbase_integration_service_1_1) {
                kbase_integration_service_1 = kbase_integration_service_1_1;
            }
        ],
        execute: function () {/*
             *  Class to handle token and login/logout actions
             *
             *  Notes:
             *    - We don't need to retrieve tokens as this is
             *      handled by https://narrative.kbase.us/#login
             */
            KBaseAuth = class KBaseAuth {
                constructor(router, integration) {
                    //let token = TOKEN;
                    //let user = USERNAME;
                    this.router = router;
                    this.integration = integration;
                    // console.log('TOKENISH?', token, USERNAME);
                    //let shouldUseCookie = config.productionMode;
                    //console.log('Production mode:', shouldUseCookie)
                    //if (shouldUseCookie) {
                    //    token = this.getToken()
                    //} else {
                    //    token = this.getToken();
                    //}
                    //if (!token) {
                    //window.location.href = config.loginUrl +
                    //'?nextrequest={"path":"https://narrative-ci.kbase.us/#login","external":true}'
                    //     console.log('no token', 'attempting to redirect')
                    //    return
                    //throw ('User token was not found in cookie "kbase_session"');
                    // }
                    this.token = integration.getToken();
                    this.user = integration.getUsername();
                    this.username = integration.getUsername();
                    //this.user = token.split('|')[0].replace('un=', '');
                    //this.token = token;
                    //console.log('token', String(this.token))
                    // redirect '/browse/' to 'browse/<user>' on app start
                    //let path = window.location.pathname;
                    //if (path === '/' || path.split('/')[1] === 'browse')
                    //    this.router.navigate( ['Selector/FileTable', { path: '/'+this.user }]);
                }
                // method to get and parse the token from "kbase_session" cookie
                // into the correct, usable format.
                // see https://atlassian.kbase.us/browse/NAR-855?jql=text%20~%20%22cookie%22
                // getToken() {
                //     let token;
                //     let cookies = document.cookie.split('; ');
                //     cookies.some(cookie => {
                //         let key = cookie.split('=')[0];
                //         if (key === 'kbase_session') {
                //             token = this.decodeToken(cookie);
                //             return true;
                //         }
                //     })
                //     return token;
                // }
                // decodeToken(sessionString: string) {
                //     let s = sessionString,
                //     encodedToken = s.slice(s.indexOf('token'), s.length);
                //     let token = decodeURIComponent(encodedToken).split('=')[1]
                //         .replace(/EQUALSSIGN/g, '=').replace(/PIPESIGN/g, '|');
                //     return token;
                // }
                getToken() {
                    return this.token;
                }
                getUsername() {
                    return this.username;
                }
                logout() { }
                isLoggedIn() {
                    if (this.token)
                        return true;
                    else
                        return false;
                }
            };
            KBaseAuth = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [router_1.Router,
                    kbase_integration_service_1.KBaseIntegration])
            ], KBaseAuth);
            exports_1("KBaseAuth", KBaseAuth);
        }
    };
});
//# sourceMappingURL=kbase-auth.service.js.map