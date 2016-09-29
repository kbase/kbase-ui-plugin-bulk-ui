System.register(['@angular/core', '@angular/router', '../services/ftp.service'], function(exports_1, context_1) {
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
    var core_1, router_1, ftp_service_1;
    var htmlTemplate, cssTemplate, SelectorView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            }],
        execute: function() {
            htmlTemplate = `
<div>
    <a md-raised-button
        href="https://www.globus.org/app/transfer?destination_id=3aca022a-5e5b-11e6-8309-22000b97daec&destination_path=%2F"
        target="_blank"
        color="primary"
        class="md-primary pull-left">
        <i class="material-icons button-icon">cloud_upload</i>
        Upload with Globus Online
    </a>
    <div class="help-text" *ngIf="!selectedType.name">
        or, select a type to import:
    </div>
    <div class="help-text" *ngIf="selectedType.name == 'Genomes'" >
        Next, select fasta files from below to import.
    </div>
    <div class="help-text" *ngIf="selectedType.name == 'Single-end Reads'" >
        Next, select single-end reads from below to import.
    </div>
    <div class="help-text" *ngIf="selectedType.name == 'Paired-end Reads'" >
        Next, add 2 paired-end reads at a time.
    </div>
    <div class="help-text" *ngIf="selectedType.name == 'Interleaved Paired-end Reads'" >
        Next, select Interleaved Paired-end reads from below to import.
    </div>
    <select (change)="onSelectType($event.target.value)" class="md-select type-selector">
        <option selected disabled class="md-option">Choose import type...</option>
        <option [value]="i" *ngFor="let t of types; let i=index" class="md-option">{{t.name}}</option>
    </select>
    <div class="pull-right">
        <div class="check-counter" *ngIf="selectedType.setsAllowed">
            {{selectedSetCount ? selectedSetCount : 0}} set{{selectedSetCount > 1 ? 's' : ''}} added
            <span *ngIf="selectedSetCount">
                (<a (click)="clearSelectedSets()" class="pointer">clear</a>)
            </span>
        </div>
        <button md-button
            *ngIf="selectedType.setsAllowed"
            (click)="addSet()"
            color="primary"
            class="add-set-btn md-raised">
            <i class="material-icons button-icon">library_add</i> Add set
        </button>
        <div class="check-counter" *ngIf="!selectedType.setsAllowed && selectedCount">
            {{selectedCount}} selected
            <span *ngIf="selectedCount">
                (<a (click)="clearSelected()" class="pointer">clear</a>)
            </span>
        </div>
        <button md-button 
            [routerLink]="['/edit-meta']"
            ng-disabled="(!selectedType.setsAllowed && !selectedCount)
                     || (selectedType.setsAllowed && !selectedSetCount)"
            color="primary"
            class="pull-right md-raised">
            Continue <i class="material-icons button-icon">arrow_forward</i>
        </button>
    </div>
</div>
<br>
<div class="table-container">
    <card class="file-table">
        <router-outlet></router-outlet>
    </card>
</div>
<!-- uncomment for a folder/file tree viwer
    <card class="file-tree-container">
        <file-tree [folders]="folders"
                   [onSelect]="onFolderSelect"
                   [selectedPath]="selectedPath">
        </file-tree>
    </card>
-->
`;
            cssTemplate = `
.side-nav {
    float: left;
}
.side-nav card {
    width: 21%;
    position: fixed;
}
.quota {
    width: 100%;
}
.import-status {
    max-width: 25%;
    display: inline-block;
}
file-tree {
    display: block;
    margin-left: -20px;
}
.file-tree-container {
    margin-top: 35px;
    height: calc(100% - 190px);
    overflow-y: auto;
}
.file-table-container {
    width: 75%;
    float: right;
}
.color-ok {
    color: #34B0D8;
}
.color-success {
    color: #5DAB4C;
}
.type-selector {
}
.add-set-btn {
    margin-right: 10px;
}`;
            SelectorView = class SelectorView {
                constructor(router, ftp) {
                    this.router = router;
                    this.ftp = ftp;
                    this.selectedType = {};
                    this.activeImports = 0;
                    this.completedImports = 0;
                    this.types = [{ name: 'Genomes', allowedType: 'file' },
                        { name: 'Single-end Reads', allowedType: 'file' },
                        { name: 'Paired-end Reads', allowedType: 'file', setsAllowed: true },
                        { name: 'Interleaved Paired-end Reads', allowedType: 'file' }
                    ];
                    this.ftp.selectedPath$.subscribe(path => this.selectedPath = path);
                    this.ftp.selectedFileCount$.subscribe(count => this.selectedCount = count);
                    this.ftp.selectedSetCount$.subscribe(count => {
                        this.selectedSetCount = count;
                        console.log('updating count', this.selectedSetCount);
                    });
                }
                ngOnInit() {
                    this.selectedCount = this.ftp.selectedFiles.length;
                }
                clearSelected() {
                    this.selectedFiles = [];
                    this.ftp.clearSelected();
                }
                onFolderSelect(folder) {
                    console.log('folder!', folder);
                }
                onSelectType(index) {
                    this.selectedType = this.types[index];
                    this.ftp.selectType(this.selectedType);
                }
                addSet() {
                    console.log('calling ftp.addSet');
                    this.ftp.addSet();
                }
            };
            SelectorView = __decorate([
                core_1.Component({
                    selector: 'selector',
                    template: htmlTemplate,
                    styles: [cssTemplate],
                    providers: []
                }), 
                __metadata('design:paramtypes', [router_1.Router, ftp_service_1.FtpService])
            ], SelectorView);
            exports_1("SelectorView", SelectorView);
        }
    }
});
//# sourceMappingURL=selector.view.js.map