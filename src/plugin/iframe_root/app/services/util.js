System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Util;
    return {
        setters: [],
        execute: function () {
            Util = class Util {
                getClockTime() {
                    let date = new Date(), h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
                    let hours = h > 12 ? h - 12 : (h === 0 ? 12 : h), mins = m < 10 ? '0' + m : m, secs = s < 10 ? '0' + s : s;
                    return hours + ":" + mins + ":" + secs + ' ' + (h >= 12 ? 'PM' : 'AM');
                }
            };
            exports_1("Util", Util);
        }
    };
});
//# sourceMappingURL=util.js.map