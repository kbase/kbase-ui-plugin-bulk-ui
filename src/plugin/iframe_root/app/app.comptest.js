System.register(["@angular/core", "./services/ftp.service", "./services/kbase-auth.service"], function (exports_1, context_1) {
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
    var core_1, ftp_service_1, kbase_auth_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            }
        ],
        execute: function () {
            AppComponent = class AppComponent {
                constructor(ftpService, authService) {
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `<md-sidenav-layout>

            <md-sidenav #sidenav mode="over" id="kbase-sidenav">
                <ul class="list-unstyled">
                    <li>
                        <a href="/#narrativemanager/start">
                            <i class="icon-file"></i> Narrative
                        </a>
                    </li>
                    <li>
                        <a href="/#appcatalog">
                        <i class="icon-book"></i> App Catalog</a>
                    </li>
                    <li>
                        <a href="/search/#/search/?q=*">
                        <i class="icon-search"></i> Search</a>
                    </li>
                    <li>
                        <a href="/#dashboard">
                        <i class="icon-tachometer"></i> Dashbaord</a>
                    </li>
                    <li><hr class="no-margin"></li>
                    <li>
                        <a href="https://kbase.us/contact" target="_blank">
                        <i  class="icon-envelope-o"></i> Contact KBase</a>
                    </li>
                    <li>
                        <a href="https://kbase.us/about" target="_blank">
                        <i class="icon-info-circle"></i> About KBase</a>
                    </li>
                </ul>
            </md-sidenav>

            <toolbar [sidenav]="sidenav"></toolbar>

            <div class="content">
                <router-outlet></router-outlet>
            </div>

        </md-sidenav-layout>`
                }),
                __metadata("design:paramtypes", [ftp_service_1.FtpService,
                    kbase_auth_service_1.KBaseAuth])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.comptest.js.map