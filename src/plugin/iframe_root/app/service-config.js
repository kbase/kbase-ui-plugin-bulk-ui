System.register(['../kbase/iframe-kbase-integration'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var iframe_kbase_integration_1;
    var KBaseConfig;
    return {
        setters:[
            function (iframe_kbase_integration_1_1) {
                iframe_kbase_integration_1 = iframe_kbase_integration_1_1;
            }],
        execute: function() {
            // declare var CONFIG:any
            //export const config = {
            //    config: CONFIG,
            //    productionMode: false
            //}
            /*
            export const configx = {
                config: CONFIG,
                endpoints: {
                    njs: "https://ci.kbase.us/services/njs_wrapper",
                    ujs: "https://ci.kbase.us/services/userandjobstate",
                    ws: "https://ci.kbase.us/services/ws",                   // workspace service
                    ftpApi: "https://ci.kbase.us/services/kb-ftp-api/v0",    //"http://localhost:3000/v0",
                },
                loginUrl: "https://narrative.kbase.us/#login",
                narrativeUrl: "https:/x/narrative-ci.kbase.us/narrative",
                contactUrl: "http://kbase.us/contact-us/",
                // true: token will be parsed from cookie
                // false: token be parsed from app/dev-token.ts and stored in cookie
                productionMode: false
            }
            */
            KBaseConfig = class KBaseConfig {
                constructor() {
                }
                getConfig() {
                    return iframe_kbase_integration_1.KBase.config;
                }
            };
            exports_1("KBaseConfig", KBaseConfig);
        }
    }
});
//# sourceMappingURL=service-config.js.map