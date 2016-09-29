System.register(['@angular/core', '../services/ftp.service'], function(exports_1, context_1) {
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
    var core_1, ftp_service_1;
    var cssTemplate, htmlTemplate, FileTreeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            }],
        execute: function() {
            cssTemplate = `
.spacer {
    display: inline-block;
    padding-left: 15px;
}
.group {
    list-style: none;
    padding-left: 25px;
}
a.file {
    text-decoration: none;
    color: #333;
    display:block;
    width: 100%;

}
a.file:hover {
    width: 100%;
    background-color: #f5f5f5;
}
.icon-folder {
    position: relative;
    top: 7px;
}
.icon-expand {
    opacity: 0.7;
    font-size: .9em;
    vertical-align: middle;
}
.icon-expand:hover {
    opacity: 1.0;
    cursor: pointer;
}
.selected-folder {
    background-color: #E5F9FF;
}
.selected-folder:hover {
    background-color: #E5F9FF !important;
}`;
            htmlTemplate = `
<ul class="group">
    <li *ngFor="let folder of folders">
        <a class="file"
            (click)="selectFolder($event, folder)"
            [routerLink]="['FileTable', {'path': folder.path}]"
            [class.selected-folder]="selectedPath==folder.path">
            <div class="spacer" *ngIf="!folder.folderCount"></div>
            <i *ngIf="folder.folderCount && !folder.expanded"
                (click)="expandFolder($event, folder)"
                class="material-icons icon-expand">
                add_box
            </i>
            <i *ngIf="folder.expanded"
                (click)="expandFolder($event, folder)"
                class="material-icons icon-expand">
                indeterminate_check_box
            </i>
            <i class="material-icons icon-folder">
                folder_open
            </i>
            {{folder.name}}
            <small *ngIf="folder.nlink == 0" class="text-muted">(empty)</small>
        </a>
        <file-tree *ngIf="folder.expanded" [folders]="folder.folders" [onSelect]="onSelect"></file-tree>
    </li>
</ul>
`;
            FileTreeComponent = class FileTreeComponent {
                constructor(_ftpService) {
                    this._ftpService = _ftpService;
                }
                ngOnInit() { }
                expandFolder($e, folder) {
                    $e.preventDefault();
                    $e.stopPropagation();
                    folder.expanded = !folder.expanded;
                    if (folder.expanded) {
                        this._ftpService.list(folder.path)
                            .subscribe(newFolders => folder.folders = newFolders);
                    }
                    else {
                        folder.folders = [];
                    }
                }
                selectFolder($e, folder) {
                    this._ftpService.setPath(folder.path);
                    //this.onSelect(folder);
                }
            };
            __decorate([
                core_1.Input('folders'), 
                __metadata('design:type', Array)
            ], FileTreeComponent.prototype, "folders", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FileTreeComponent.prototype, "selectedPath", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], FileTreeComponent.prototype, "onSelect", void 0);
            FileTreeComponent = __decorate([
                core_1.Component({
                    selector: 'file-tree',
                    template: htmlTemplate,
                    styles: [cssTemplate],
                    providers: []
                }), 
                __metadata('design:paramtypes', [ftp_service_1.FtpService])
            ], FileTreeComponent);
            exports_1("FileTreeComponent", FileTreeComponent);
        }
    }
});
//# sourceMappingURL=file-tree.js.map