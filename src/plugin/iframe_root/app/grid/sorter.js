System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sorter;
    return {
        setters: [],
        execute: function () {
            Sorter = class Sorter {
                constructor() {
                    this.direction = 1;
                }
                sort(key, data, order) {
                    if (order == 'asc')
                        this.direction = 1;
                    if (this.key === key)
                        this.direction = -1 * this.direction;
                    else
                        this.direction = 1;
                    this.key = key;
                    data.sort((a, b) => {
                        if (a[key] === b[key])
                            return 0;
                        else if (a[key] > b[key])
                            return 1 * this.direction;
                        else
                            return -1 * this.direction;
                    });
                }
                magicSort(key, data, reverse) {
                    data.sort((a, b) => {
                        if (a[key] === b[key])
                            return 0;
                        else if (a[key] > b[key])
                            return 1;
                        else
                            return -1;
                    });
                    if (reverse)
                        data.reverse();
                }
            };
            exports_1("Sorter", Sorter);
        }
    };
});
//# sourceMappingURL=sorter.js.map