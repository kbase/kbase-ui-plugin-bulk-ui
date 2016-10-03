System.register(['@angular/core', '@angular/router', '../services/kbase-auth.service', '../services/ftp.service', '../services/job.service', '../services/workspace.service'], function(exports_1, context_1) {
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
    var core_1, router_1, kbase_auth_service_1, ftp_service_1, job_service_1, workspace_service_1;
    var htmlTemplate, cssTemplate, EditMetaView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (workspace_service_1_1) {
                workspace_service_1 = workspace_service_1_1;
            }],
        execute: function() {
            htmlTemplate = `
<div class="top-bar clearfix">
    <div class="help-text pull-left">
        Select a narrative, edit the associated meta data, and import.
    </div>
    <div class="pull-right">
    </div>
</div>
<card *ngIf="files.length">
    <div class="pull-left">
        Destination Narrative:
        <select (change)="selectNarrative($event.target.value)">
            <option *ngFor="let narrative of narratives; let i = index" [value]="i">{{narrative.name}}</option>
        </select>
    </div>
    <div class="pull-right">
        <div class="check-counter">
            {{selectedCount || selectedSetCount}}
            {{selectedCount ? 'selected' : (selectedSetCount > 1 ? 'sets' : 'set') }}
        </div>
        <button md-raised-button
            (click)="startImport()"
            [disabled]="!(selectedCount || selectedSetCount) || importInProgress"
            color="primary">
            {{importInProgress ? 'Submitting...' : 'Start Import'}}
        </button>
    </div>
    <br><br>
    <h4>Edit meta data</h4>
    <table class="edit-sheet">
        <thead>
            <tr>
                <th>File Name</th>

                <th *ngFor="let spec of importSpec">{{spec.name}}</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let file of files">
                <td class="file-name">
                    {{file.name}}
                </td>

                <td *ngFor="let col of importSpec"
                    (mousedown)="selectCell($event)"
                    (mouseup)="mouseUp($event)"
                    (mouseover)="cellSelection && mouseOver($event)"
                    [ngClass]="{'text-center': col.type == 'checkbox'}">
                    <md-checkbox *ngIf="col.type == 'checkbox'"
                                [checked]="file.meta[col.prop]"
                                (change)="file.meta[col.prop] = $event">
                    </md-checkbox>
                    <input *ngIf="!col.type || col.type == 'wsObject'" [(ngModel)]="file.meta[col.prop]">
                </td>
            </tr>
        </tbody>
    </table>
</card>
<card *ngIf="!files.length">
    There are no selected files.  Select some <a [routerLink]="['/browse', user]">here</a>.
</card>
`;
            cssTemplate = `
table.edit-sheet {
    border-collapse: collapse;
    width: 100%;
}
table.edit-sheet > tbody > tr > td {
    border: 1px solid #ccc;
}
table.edit-sheet input {
    width: 100%;
    -webkit-appearance:none;
    padding: 0;
    border: none;
    padding: .7em;
    font-size: .8em;
}
.file-name {
    font-weight: 700;
    padding: .7em;
    font-size: .8em;
}
.selected {
    background-color: #E2F3FF;
}
.check-counter {
    display: inline-block;
    position:relative;
    top: 0;
    right: 10px;
}`;
            EditMetaView = class EditMetaView {
                constructor(elementRef, renderer, ftp, jobService, wsService, router, auth) {
                    this.elementRef = elementRef;
                    this.renderer = renderer;
                    this.ftp = ftp;
                    this.jobService = jobService;
                    this.wsService = wsService;
                    this.router = router;
                    this.auth = auth;
                    this.files = [];
                    this.importInProgress = false;
                    this.genomeSpec = [{
                            name: 'Import Name',
                            prop: "importName",
                            required: 'true',
                            type: 'wsObject' // need to implemented error handling in UI
                        }, {
                            name: 'Contig Set',
                            prop: "contigsetName",
                            type: 'string'
                        }];
                    this.singleReadsSpec = [{
                            name: 'Import Name',
                            prop: "importName",
                            required: 'true',
                            type: 'wsObject'
                        }, {
                            name: 'SRA?',
                            prop: "sra",
                            type: 'checkbox'
                        }, {
                            name: 'Mean Insert Size',
                            prop: "insert_size"
                        }, {
                            name: 'Stdev of Insert Size',
                            prop: "std_dev"
                        }];
                    // use same spec file for paired-end for now.
                    this.pairedReadsSpec = this.singleReadsSpec;
                    // cell interaction
                    this.cellSelection = false;
                    this.user = auth.user;
                    console.log('selected?', ftp.selectedFiles);
                    this.ftp.selectedPath$.subscribe(path => this.selectedPath = path);
                }
                ngOnInit() {
                    // get type selected on browser
                    this.selectedType = this.ftp.selectedType.getValue()['name'];
                    if (this.selectedType == 'Genomes')
                        this.importSpec = this.genomeSpec;
                    else if (this.selectedType == 'Single-end Reads')
                        this.importSpec = this.singleReadsSpec;
                    else if (this.selectedType == 'Paired-end Reads')
                        this.importSpec = this.pairedReadsSpec;
                    else if (this.selectedType == 'Interleaved Paired-end Reads')
                        this.importSpec = this.singleReadsSpec;
                    this.preprocessData(this.selectedType);
                    this.selectedCount = this.ftp.selectedFiles.length;
                    this.selectedSetCount = this.ftp.selectedSets.length;
                    this.wsService.listNarratives().subscribe(res => {
                        this.narratives = res;
                        this.selectedNarrative = this.narratives[0];
                    });
                }
                selectNarrative(index) {
                    this.selectedNarrative = this.narratives[index];
                }
                startImport() {
                    console.log('starting import!');
                    this.importInProgress = true;
                    let wsName = this.selectedNarrative.wsName, wsId = this.selectedNarrative.wsId, narId = this.selectedNarrative.narrativeId, type = this.selectedType;
                    if (type === 'Genomes') {
                        this.jobService.runGenomeTransforms(this.files, wsName)
                            .subscribe(ids => {
                            console.log('genome import jobIds', ids);
                            this.createBulkJob(ids, wsId, narId);
                        });
                    }
                    else if (type === "Single-end Reads") {
                        this.jobService.runReadsImports(this.files, wsName)
                            .subscribe(ids => {
                            console.log('reads import jobIds', ids);
                            this.createBulkJob(ids, wsId, narId);
                        });
                    }
                    else if (type === "Interleaved Paired-end Reads") {
                        this.jobService.runReadsImports(this.files, wsName)
                            .subscribe(ids => {
                            console.log('reads import jobIds', ids);
                            this.createBulkJob(ids, wsId, narId);
                        });
                    }
                    else if (type === "Paired-end Reads") {
                        this.jobService.runReadsImports(this.files, wsName)
                            .subscribe(ids => {
                            console.log('reads import jobIds', ids);
                            this.createBulkJob(ids, wsId, narId);
                        });
                    }
                }
                // creates a bulk "job" that simply contains ids of jobs in description
                // and narrative ws.1.obj.1 in status
                createBulkJob(jobIds, wsId, narId) {
                    this.ftp.createImportJob(jobIds, wsId, narId)
                        .subscribe(res => {
                        console.log('create import res', res);
                        this.router.navigate(['status']);
                    });
                }
                // method to copy selected file data
                // and add any defaults to edit meta table data
                preprocessData(type) {
                    if (type == "Genomes")
                        this.preprocessGenomes();
                    else if (type == "Paired-end Reads")
                        this.preprocessPairedReads();
                    else if (type == "Single-end Reads")
                        this.preprocessSingleReads();
                    else if (type == "Interleaved Paired-end Reads")
                        this.preprocessSingleReads();
                }
                preprocessGenomes() {
                    let files = Object.assign([], this.ftp.selectedFiles);
                    for (let i = 0; i < files.length; i++) {
                        let file = files[i], objName = file.name.replace(/[^\w\-\.\_]/g, '-'), ext = objName.slice(objName.lastIndexOf('.'), objName.length);
                        file['meta'] = {
                            importName: objName,
                            contigsetName: objName.replace(ext, '') + '_contigset'
                        };
                    }
                    this.files = files;
                }
                preprocessSingleReads() {
                    let files = Object.assign([], this.ftp.selectedFiles);
                    for (let i = 0; i < files.length; i++) {
                        let file = files[i], objName = file.name.replace(/[^\w\-\.\_]/g, '-'), ext = objName.slice(objName.lastIndexOf('.'), objName.length);
                        file['meta'] = {
                            importName: objName,
                            sra: false,
                            insert_size: 0,
                            std_dev: 0
                        };
                    }
                    console.log('files!', files);
                    this.files = files;
                }
                preprocessPairedReads() {
                    let ftpRoot = this.ftp.getRootDirectory();
                    let sets = Object.assign([], this.ftp.selectedSets);
                    console.log('sets', sets);
                    let rows = [];
                    sets.forEach(set => {
                        rows.push({
                            name: set[0].name + ', ' + set[1].name,
                            paths: [ftpRoot + set[0].path, ftpRoot + set[1].path],
                            meta: {
                                importName: set[0].name.replace(/[^\w\-\.\_]/g, '-')
                            }
                        });
                    });
                    console.log('rows', rows);
                    this.files = rows;
                }
                showData() {
                    console.log('data to save', this.files);
                }
                selectCell(e) {
                    this.cellSelection = true;
                    console.log('event', e, this.cellSelection);
                }
                mouseUp(e) {
                    this.cellSelection = false;
                    console.log('event', e, this.cellSelection);
                }
                mouseOver(e) {
                    console.log('e', e);
                    //this.renderer.setElementClass(e.fromElement, 'selected', true);
                    //this.renderer.setElementClass(e.target, 'selected', true);
                }
            };
            EditMetaView = __decorate([
                core_1.Component({
                    template: htmlTemplate,
                    styles: [cssTemplate],
                    providers: [
                        job_service_1.JobService,
                        workspace_service_1.WorkspaceService,
                    ]
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, ftp_service_1.FtpService, job_service_1.JobService, workspace_service_1.WorkspaceService, router_1.Router, kbase_auth_service_1.KBaseAuth])
            ], EditMetaView);
            exports_1("EditMetaView", EditMetaView);
        }
    }
});
//# sourceMappingURL=edit-meta.view.js.map