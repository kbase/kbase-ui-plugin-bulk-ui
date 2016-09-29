// import from '../app/vendor';
System.register(['../kbase/iframe-kbase-integration'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var iframe_kbase_integration_1;
    var kbase;
    return {
        setters:[
            function (iframe_kbase_integration_1_1) {
                iframe_kbase_integration_1 = iframe_kbase_integration_1_1;
            }],
        execute: function() {
            console.log('Am I booting?');
            kbase = new iframe_kbase_integration_1.KBase();
            kbase.go();
        }
    }
});
//# sourceMappingURL=iframe-boot.js.map