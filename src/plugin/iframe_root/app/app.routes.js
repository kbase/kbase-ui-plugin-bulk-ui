System.register(['./selector.view/selector.view', './edit-meta.view/edit-meta.view', './about.view/about.view', './status.view/status.view', './import-details.view/import-details.view', './job-log.view/job-log.view', './file-table/file-table', './home.view/home.view'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var selector_view_1, edit_meta_view_1, about_view_1, status_view_1, import_details_view_1, job_log_view_1, file_table_1, home_view_1;
    var AppRoutes;
    return {
        setters:[
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
            function (file_table_1_1) {
                file_table_1 = file_table_1_1;
            },
            function (home_view_1_1) {
                home_view_1 = home_view_1_1;
            }],
        execute: function() {
            exports_1("AppRoutes", AppRoutes = [
                {
                    // See app/services/kbase-auth.service.ts for auth handling
                    path: 'browse',
                    component: selector_view_1.SelectorView,
                    //canActivate: [AuthGuard],
                    children: [{
                            path: ':path',
                            component: file_table_1.FileTableComponent
                        }]
                }, {
                    path: 'intro',
                    component: home_view_1.HomeView,
                }, {
                    path: 'about',
                    component: about_view_1.AboutView,
                }, {
                    path: 'edit-meta',
                    component: edit_meta_view_1.EditMetaView
                }, {
                    path: 'status',
                    component: status_view_1.StatusView
                }, {
                    path: 'import-details/:id',
                    component: import_details_view_1.ImportDetailsView
                }, {
                    path: 'job-log/:id',
                    component: job_log_view_1.JobLogView
                }, {
                    path: '',
                    redirectTo: '/intro',
                    pathMatch: 'full'
                }
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map