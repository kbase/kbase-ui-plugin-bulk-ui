System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/router', '@angular/http', '@angular2-material/button', '@angular2-material/sidenav', '@angular2-material/progress-circle', '@angular2-material/checkbox', '@angular2-material/progress-bar', './app.comptest', './app.routes', './toolbar/toolbar', './file-table/file-table', './file-tree/file-tree', './grid/dataTable', './card/card', './selector.view/selector.view', './edit-meta.view/edit-meta.view', './about.view/about.view', './status.view/status.view', './import-details.view/import-details.view', './job-log.view/job-log.view', './home.view/home.view', './services/pipes', './services/ftp.service', './services/kbase-rpc.service', './services/kbase-auth.service', './services/kbase-integration.service', './services/kbase-config.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, router_1, http_1, button_1, sidenav_1, progress_circle_1, checkbox_1, progress_bar_1, app_comptest_1, app_routes_1, toolbar_1, file_table_1, file_tree_1, dataTable_1, card_1, selector_view_1, edit_meta_view_1, about_view_1, status_view_1, import_details_view_1, job_log_view_1, home_view_1, pipes_1, ftp_service_1, kbase_rpc_service_1, kbase_auth_service_1, kbase_integration_service_1, kbase_config_service_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (progress_circle_1_1) {
                progress_circle_1 = progress_circle_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (progress_bar_1_1) {
                progress_bar_1 = progress_bar_1_1;
            },
            function (app_comptest_1_1) {
                app_comptest_1 = app_comptest_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (file_table_1_1) {
                file_table_1 = file_table_1_1;
            },
            function (file_tree_1_1) {
                file_tree_1 = file_tree_1_1;
            },
            function (dataTable_1_1) {
                dataTable_1 = dataTable_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (selector_view_1_1) {
                selector_view_1 = selector_view_1_1;
            },
            function (edit_meta_view_1_1) {
                edit_meta_view_1 = edit_meta_view_1_1;
            },
            function (about_view_1_1) {
                about_view_1 = about_view_1_1;
            },
            function (status_view_1_1) {
                status_view_1 = status_view_1_1;
            },
            function (import_details_view_1_1) {
                import_details_view_1 = import_details_view_1_1;
            },
            function (job_log_view_1_1) {
                job_log_view_1 = job_log_view_1_1;
            },
            function (home_view_1_1) {
                home_view_1 = home_view_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            },
            function (kbase_rpc_service_1_1) {
                kbase_rpc_service_1 = kbase_rpc_service_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            },
            function (kbase_integration_service_1_1) {
                kbase_integration_service_1 = kbase_integration_service_1_1;
            },
            function (kbase_config_service_1_1) {
                kbase_config_service_1 = kbase_config_service_1_1;
            }],
        execute: function() {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule,
                        forms_1.FormsModule,
                        button_1.MdButtonModule.forRoot(),
                        sidenav_1.MdSidenavModule.forRoot(),
                        progress_circle_1.MdProgressCircleModule.forRoot(),
                        checkbox_1.MdCheckboxModule.forRoot(),
                        progress_bar_1.MdProgressBarModule.forRoot(),
                        router_1.RouterModule.forRoot(app_routes_1.AppRoutes)
                    ],
                    declarations: [
                        app_comptest_1.AppComponent,
                        toolbar_1.ToolbarComponent,
                        file_table_1.FileTableComponent,
                        file_tree_1.FileTreeComponent,
                        card_1.CardDirective,
                        selector_view_1.SelectorView,
                        edit_meta_view_1.EditMetaView,
                        about_view_1.AboutView,
                        status_view_1.StatusView,
                        import_details_view_1.ImportDetailsView,
                        job_log_view_1.JobLogView,
                        home_view_1.HomeView,
                        pipes_1.Encode,
                        pipes_1.ElapsedTime,
                        pipes_1.ReadableSize,
                        dataTable_1.DataTable
                    ],
                    providers: [
                        ftp_service_1.FtpService,
                        kbase_rpc_service_1.KBaseRpc,
                        kbase_auth_service_1.KBaseAuth,
                        kbase_integration_service_1.KBaseIntegration,
                        kbase_config_service_1.KBaseConfig
                    ],
                    bootstrap: [app_comptest_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map