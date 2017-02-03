import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { KBaseAuth } from '../services/kbase-auth.service'
import { FtpService } from '../services/ftp.service'
import { JobService } from '../services/job.service';
import { WorkspaceService } from '../services/workspace.service';

import { MdButton } from '@angular2-material/button';
import { ElapsedTime } from '../services/pipes';

const htmlTemplate = `
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
            <option *ngFor="let narrative of narratives; let i = index" [value]="i">{{narrative.name}} {{narrative.narrativeId}}</option>
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
        <thead style="border:3px solid green">
<!--            <tr>
                <th style="border:3px solid green">Select All</th>
                 <th style="border:3px solid green" *ngFor="let col of importSpec">
                    <md-checkbox *ngIf="col.type == 'checkbox'">
                    </md-checkbox>
                    <select *ngIf="col.type == 'stdropdown'" >
                             <option value="Unknown">Unknown</option>
                             <option value="Illumina">Illumina</option>
                             <option value="PacBio CLR">PacBio CLR</option>
                             <option value="PacBio CCS">PacBio CCS</option>
                             <option value="IonTorrent">IonTorrent</option>
                             <option value="NanoPore">NanoPore</option>
                    </select>
                    <select *ngIf="col.type == 'postdropdown'" >
                             <option value=""></option>
                             <option value="Assemble Contigs from Reads">Assemble Contigs from Reads</option>
                             <option value="Assemble Reads with MEGAHIT">Assemble Reads with MEGAHIT</option>
                             <option value="Align Reads using Bowtie2">Align Reads using Bowtie2</option>
                             <option value="Align Reads using HISAT2">Align Reads using HISAT2</option>
                             <option value="Reads Quality Control using FastQC">Reads Quality Control using FastQC</option>
                    </select>
                    <input *ngIf="!col.type || col.type == 'wsObject' || col.type == 'string'" > 
                </th> 
            </tr> -->
            <tr>
                <th>File Name</th>
                <th style="border:3px solid green" *ngFor="let spec of importSpec">{{spec.name}}</th>
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
                    [ngClass]="{'text-center': col.type == 'checkbox' || col.type == 'stdropdown'}">
                    <md-checkbox *ngIf="col.type == 'checkbox'"
                                [(ngModel)]="file.meta[col.prop]">
                    </md-checkbox>
                    <select *ngIf="col.type == 'stdropdown'" [(ngModel)]="file.meta[col.prop]">
		    	     <option value="Unknown">Unknown</option>
                             <option value="Illumina">Illumina</option>
                             <option value="PacBio CLR">PacBio CLR</option>
                             <option value="PacBio CCS">PacBio CCS</option>
                             <option value="IonTorrent">IonTorrent</option>
                             <option value="NanoPore">NanoPore</option>
                    </select>
                    <select *ngIf="col.type == 'postdropdown'" [(ngModel)]="file.meta[col.prop]">
                             <option value=""></option>
                             <option value="Assemble Contigs from Reads">Assemble Contigs from Reads</option>
                             <option value="Assemble Reads with MEGAHIT">Assemble Reads with MEGAHIT</option>
                             <option value="Align Reads using Bowtie2">Align Reads using Bowtie2</option>
                             <option value="Align Reads using HISAT2">Align Reads using HISAT2</option>
                             <option value="Reads Quality Control using FastQC">Reads Quality Control using FastQC</option>
                    </select>
                    <input *ngIf="!col.type || col.type == 'wsObject' || col.type == 'string'" [(ngModel)]="file.meta[col.prop]">
                </td>
            </tr>
        </tbody>
    </table>
</card>
<card *ngIf="!files.length">
    There are no selected files.  Select some <a [routerLink]="['/browse', user]">here</a>.
</card>
`

const cssTemplate = `
table.edit-sheet {
    border-collapse: collapse;
    width: 100%;
}
table.edit-sheet > tbody > tr > td {
    border: 1px solid #ccc;
}
table.edit-sheet input {
    width: 100%;
    -webkit-appearance:searchfield;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing: border-box;
    padding: 0;
/*    border: none;*/
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
}`

@Component({
    template: htmlTemplate,
    styles: [cssTemplate],
    providers: [
        JobService,
        WorkspaceService,
    ]
})

export class EditMetaView implements OnInit {
    user;
    files = [];
    selectedPath;
    selectedCount;
    selectedSetCount;

    errorMessage;

    narratives;
    selectedNarrative;
    selectedType;

    importInProgress: boolean = false;


    genomeSpec = [{
        name: 'Import Name',
        prop: "importName",
        required: 'true', // need to implement
        type: 'wsObject'  // need to implemented error handling in UI
    }, {
        name: 'Contig Set',
        prop: "contigsetName",
        type: 'string'
    }]

    singleReadsSpec = [{
        name: 'Import Name',
        prop: "importName",
        required: 'true',
        type: 'wsObject'
    }, {
        name: 'Reads Orientation Outward',
        prop: "read_orientation_outward",
        type: 'checkbox'
    }, {
        name: 'Mean Insert Size',
        prop: "insert_size"
    }, {
        name: 'Stdev of Insert Size',
        prop: "std_dev"
    }, {
        name: 'Sequencing Technology',
        prop: "sequencing_tech",
        required: 'true',
        type: 'stdropdown'
    }, {
        name: 'Is Metagenome',
        prop: "single_genome",
        type: 'checkbox'
/*   }, {
        name: 'Post-import Method',
        prop: "poststep",
        type: 'postdropdown'
    }, {
        name: 'Strain',
        prop: "strain",
        required: 'false',
        type: 'string'
   }, {
        name: 'Source',
        prop: "source",
        required: 'false',
        type: 'string'*/
    }]

    // use same spec file for paired-end for now.
    pairedReadsSpec = this.singleReadsSpec;

    // the actual spec being used, dependent on selected type
    importSpec;

    // cell interaction
    cellSelection: boolean = false;


    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        private ftp: FtpService,
        private jobService: JobService,
        private wsService: WorkspaceService,
        private router: Router,
        private auth: KBaseAuth) {
        this.user = auth.user;

        this.ftp.selectedPath$.subscribe(path => this.selectedPath = path)
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
        else if (this.selectedType == 'SRA Format Reads')
            this.importSpec = this.singleReadsSpec;


        this.preprocessData(this.selectedType);
        this.selectedCount = this.ftp.selectedFiles.length;
        this.selectedSetCount = this.ftp.selectedSets.length;

        this.wsService.listNarratives().subscribe(res => {
            this.narratives = res;
            this.selectedNarrative = this.narratives[0];
        })
    }

    selectNarrative(index) {
        this.selectedNarrative = this.narratives[index];
    }

    startImport() {
        this.importInProgress = true;

        let wsName = this.selectedNarrative.wsName,
            wsId = this.selectedNarrative.wsId,
            narId = this.selectedNarrative.narrativeId,
            type = this.selectedType;
        
        if (type === 'Genomes') {
            this.jobService.runGenomeTransforms(this.files, wsName)
                .subscribe(ids => {
                    this.createBulkJob(ids, wsId, narId)
                })
        } else if (type === "Single-end Reads") {
            this.jobService.runLibraryImports(this.files, wsName)
                .subscribe(ids => {
                    this.createBulkJob(ids, wsId, narId)
                })
        } else if (type === "Interleaved Paired-end Reads") {
            this.jobService.runInterleavedLibraryImports(this.files, wsName)
                .subscribe(ids => {
                    this.createBulkJob(ids, wsId, narId)
                })
        } else if (type === "SRA Format Reads") {
            this.jobService.runSRAImports(this.files, wsName)
                .subscribe(ids => {
                    this.createBulkJob(ids, wsId, narId)
                })
        } else if (type === "Paired-end Reads") {
            this.jobService.runLibraryImports(this.files, wsName)
                .subscribe(ids => {
                    this.createBulkJob(ids, wsId, narId)
                })
        }
    }


    // creates a bulk "job" that simply contains ids of jobs in description
    // and narrative ws.1.obj.1 in status
    createBulkJob(jobIds, wsId, narId) {
        this.ftp.createImportJob(jobIds, wsId, narId)
            .subscribe(res => {
                this.router.navigate(['status']);
        })
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
        else if (type == "SRA Format Reads")
            this.preprocessSingleReads();
    }

    preprocessGenomes() {
        let files = Object.assign([], this.ftp.selectedFiles);

        for (let i=0; i < files.length; i++) {
            let file = files[i],
                objName = file.name.replace(/[^\w\-\.\_]/g,'-'),
                ext = objName.slice(objName.lastIndexOf('.'), objName.length);

            file['meta'] = {
                importName: objName,
                contigsetName: objName.replace(ext, '')+'_contigset'
            }
        }

        this.files = files;
    }

    preprocessSingleReads() {
        let files = Object.assign([], this.ftp.selectedFiles);

        for (let i=0; i < files.length; i++) {
            let file = files[i],
                objName = file.name.replace(/[^\w\-\.\_]/g,'-'),
                ext = objName.slice(objName.lastIndexOf('.'), objName.length);

            file['meta'] = {
                importName: objName,
                read_orientation_outward: false,
                sequencing_tech: "Unknown",
                single_genome: false
            }
        }

        this.files = files;
    }

    preprocessPairedReads() {
        let ftpRoot= this.ftp.getRootDirectory();
        let sets = Object.assign([], this.ftp.selectedSets);

        let rows = []
        sets.forEach(set => {
            rows.push({
                name: set[0].name+', '+set[1].name,
                paths: [ftpRoot+set[0].path, ftpRoot+set[1].path],
                meta: {
                    importName: set[0].name.replace(/[^\w\-\.\_]/g,'-'),
		    sequencing_tech: "Unknown",
		    read_orientation_outward: false,
		    single_genome: false
                }
            })
        })

        this.files = rows;
    }


    showData() {
    }

    selectCell(e) {
        this.cellSelection = true;
    }

    mouseUp(e) {
        this.cellSelection = false;
    }

    mouseOver(e) {
        //this.renderer.setElementClass(e.fromElement, 'selected', true);
        //this.renderer.setElementClass(e.target, 'selected', true);
    }



}
