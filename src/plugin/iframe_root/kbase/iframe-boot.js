// import from '../app/vendor';
System.register(["../kbase/iframe-kbase-integration"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var iframe_kbase_integration_1, kbase;
    return {
        setters: [
            function (iframe_kbase_integration_1_1) {
                iframe_kbase_integration_1 = iframe_kbase_integration_1_1;
            }
        ],
        execute: function () {// import from '../app/vendor';
            kbase = new iframe_kbase_integration_1.KBase();
            kbase.go();
        }
    };
});
//# sourceMappingURL=iframe-boot.js.map