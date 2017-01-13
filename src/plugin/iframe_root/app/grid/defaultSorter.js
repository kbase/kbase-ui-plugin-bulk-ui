System.register(["@angular/core", "./dataTable.service", "./sorter"], function (exports_1, context_1) {
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
    var core_1, dataTable_service_1, sorter_1, DefaultSorter;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dataTable_service_1_1) {
                dataTable_service_1 = dataTable_service_1_1;
            },
            function (sorter_1_1) {
                sorter_1 = sorter_1_1;
            }
        ],
        execute: function () {
            DefaultSorter = class DefaultSorter {
                constructor(dataTableService) {
                    this.dataTableService = dataTableService;
                    this.sorter = new sorter_1.Sorter();
                    /*
                    this.dataTableService.updateEvent$.subscribe(
                        (data, sortBy, sortOrder) => {
                            console.log('new data', data)
            
                            this.data = data;
                            this.sortBy = sortBy;
                            this.sortOrder = sortOrder;
            
                            if (data && sortBy == this.sortBy) {
                                this.dataTableService.announceSort(this.sortBy, this.sortOrder);
                                //this.sorter.magicSort(this.sortBy, data, this.sortOrder);
                            }
                        })
                        */
                }
                ngOnInit() {
                }
                sort() {
                    this.sortOrder = this.sortOrder == 'asc' ? 'desc' : 'asc';
                    //this.sorter.magicSort(this.sortBy, data, this.sortOrder);
                    //this.sorter.magicSort(this.sortBy, this.data, this.sortOrder);
                    this.dataTableService.announceSort(this.sortBy, this.sortOrder);
                }
            };
            __decorate([
                core_1.Input("by"),
                __metadata("design:type", String)
            ], DefaultSorter.prototype, "sortBy", void 0);
            __decorate([
                core_1.Input("sort"),
                __metadata("design:type", String)
            ], DefaultSorter.prototype, "sortOrder", void 0);
            DefaultSorter = __decorate([
                core_1.Component({
                    selector: "sorter",
                    styleUrls: ['app/grid/sortable.css'],
                    providers: [],
                    template: `
        <a style="cursor: pointer" (click)="sort()" class="sorter" >
            <ng-content></ng-content>
            <i class="material-icons"
                [class.asc]="sortOrder == 'asc'"
                [class.desc]="sortOrder == 'desc'">
            </i>
        </a>`
                }),
                __metadata("design:paramtypes", [dataTable_service_1.DataTableService])
            ], DefaultSorter);
            exports_1("DefaultSorter", DefaultSorter);
        }
    };
});
//# sourceMappingURL=defaultSorter.js.map