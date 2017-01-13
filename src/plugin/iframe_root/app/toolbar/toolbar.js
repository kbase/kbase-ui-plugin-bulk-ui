System.register(["@angular/core", "../services/kbase-auth.service"], function (exports_1, context_1) {
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
    var core_1, kbase_auth_service_1, htmlTemplate, cssTemplate, ToolbarComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            }
        ],
        execute: function () {
            // import htmlTemplate from './toolbar.html!text';
            // import cssTemplate from './toolbar.css!text';
            htmlTemplate = `
<nav>
<span class="nav-btns">
    <button md-button [routerLink]="['/browse', user]" class="nav-btn">
        <i class="material-icons">folder_open</i><bR>
        Browse
    </button>
    <button md-button [routerLink]="['/status']" class="nav-btn">
        <i class="material-icons">access_time</i><br>
        View Status
    </button>
</span>
</nav>
`;
            cssTemplate = `
:host {
    position: fixed;
    background-color: #fff;
    border-bottom: 5px solid #E0E0E0;
    color: #48B2C3;
    padding: 0px 10px;
    width: 100%;
    z-index: 100;
}
logo {
    margin: 10px 0 0 15px;
    font-size: 1.3em;
    float: left;
}
.app-name {
    color: #333;
    font-size: 1.4em;
    margin: 20px 20px 0 40px;
    float: left;
}
nav.left-side-nav {
    float: left;
    margin: 18px 10px;
}
nav.right-side-nav {
    float:right;
    margin: 15px 40px;
}
nav.right-side-nav > a:not(:last-child) {
    margin-right: 15px;
}
nav.right-side-nav > a > i.material-icons {
    position: relative;
    top: 4px;
}
/* sidenav */
.icon-menu {
    font-size: 1.9em;
}
.sidenav-caret {
    position: relative;
    bottom: 3px;
    left: 10px;
}
.nav-btns button {
    margin-top: 0px;
    color: #0088cc;
}
.nav-btns button i {
    font-size: 2.1em;
    position: relative;
    bottom: -10px;
}
`;
            ToolbarComponent = class ToolbarComponent {
                constructor(auth) {
                    this.auth = auth;
                    this.user = auth.getUsername();
                }
                toggleSidenav() {
                    this.sidenav.toggle();
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], ToolbarComponent.prototype, "sidenav", void 0);
            ToolbarComponent = __decorate([
                core_1.Component({
                    selector: 'toolbar',
                    template: htmlTemplate,
                    styles: [cssTemplate],
                    providers: []
                }),
                __metadata("design:paramtypes", [kbase_auth_service_1.KBaseAuth])
            ], ToolbarComponent);
            exports_1("ToolbarComponent", ToolbarComponent);
        }
    };
});
//# sourceMappingURL=toolbar.js.map