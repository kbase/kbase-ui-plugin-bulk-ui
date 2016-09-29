System.register(["@angular/core", './dataTable.service'], function(exports_1, context_1) {
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
    var core_1, dataTable_service_1;
    var DataTable;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dataTable_service_1_1) {
                dataTable_service_1 = dataTable_service_1_1;
            }],
        execute: function() {
            DataTable = class DataTable {
                constructor(dataTableService) {
                    this.dataTableService = dataTableService;
                    this.sortBy = "";
                    this.sortOrder = "";
                    //this.sorter = new Sorter();
                    /*
                    this.dataTableService.announceSort$.subscribe(
                        (sortBy, sortOrder) => {
                            console.log('table params', sortBy, sortOrder)
                            this.sorter.magicSort(sortBy, this.data);
                            this.sortBy = sortBy;
                            this.sortOrder = sortOrder;
                        })
                    */
                }
                ngOnChanges() {
                    if (this.data)
                        this.dataTableService.updateEvent(this.data, this.sortBy, this.sortOrder);
                }
                setSort(sortBy, sortOrder) {
                    console.log('the data', this.data);
                }
            };
            __decorate([
                core_1.Input('dTable'), 
                __metadata('design:type', Object)
            ], DataTable.prototype, "data", void 0);
            DataTable = __decorate([
                core_1.Directive({
                    selector: 'table[dTable]',
                    exportAs: 'dataTable',
                    providers: [dataTable_service_1.DataTableService]
                }), 
                __metadata('design:paramtypes', [dataTable_service_1.DataTableService])
            ], DataTable);
            exports_1("DataTable", DataTable);
        }
    }
});
//# sourceMappingURL=dataTable.js.map