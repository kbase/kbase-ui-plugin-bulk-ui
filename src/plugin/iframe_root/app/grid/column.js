System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Column;
    return {
        setters: [],
        execute: function () {
            Column = class Column {
                constructor(name, label) {
                    this.name = name;
                    this.label = label;
                }
            };
            exports_1("Column", Column);
        }
    };
});
//# sourceMappingURL=column.js.map