System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var htmlTemplate, HomeView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            htmlTemplate = `
<card>
    <h2>Bulk Importer <sup>(pre-beta)</sup></h2>
    <p>
        To get started, you must <b>first upload your data via "Browse"</b>.
    </p>
    <p>
        The Bulk Importer will support two ways to accomplish this: upload <b>via Globus Online</b> and
        <b>upload via this interface</b>.  Currently, <b>upload is only supported via Globus Online</b>.
    </p>
</card>
`;
            HomeView = class HomeView {
                constructor() {
                }
                ngOnInit() { }
            };
            HomeView = __decorate([
                core_1.Component({
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [])
            ], HomeView);
            exports_1("HomeView", HomeView);
        }
    }
});
//# sourceMappingURL=home.view.js.map