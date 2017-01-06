
import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { MdCheckbox } from '@angular2-material/checkbox';
import { MdProgressCircle } from '@angular2-material/progress-circle';

import { FtpService } from '../services/ftp.service';
import { KBaseIntegration } from '../services/kbase-integration.service';
import { KBaseAuth } from '../services/kbase-auth.service';
import { Util } from '../services/util';

import { DataTable } from '../grid/dataTable';
import { DataTableService } from '../grid/dataTable.service';

const cssTemplate = `
table {
    margin-top: 30px;
    border-collapse: collapse;
}
table > thead > tr > th {
    text-align: left;
    padding: 9px;
    border-bottom: 2px solid #ddd;
}
table > thead > tr > th:hover {
    cursor: pointer;
}
table > tbody > tr:not(:last-child) {
    border-bottom: 1px solid #ddd;
}
table > tbody > tr > td {
    padding: 10px;
}
tr.disabled {
    color: #bbb;
}
.no-files-found {
    margin: 10px;
}
.tiny-col {
    width: 1px;
}
.file-icon {
    font-size: 2.0em;
}
`;

const htmlTemplate = `
<div class="breadcrumbs">
    <span *ngFor="let folder of pathList; let i = index">
        <a *ngIf="i < pathList.length-1"
           [routerLink]="['/browse', pathList.slice(0,i+1).join('/') | encode ]">
            {{folder}}
        </a>
        {{i == pathList.length-1 ? folder : ''}}
        {{i < pathList.length-1 ? '/' : ''}}
    </span>
</div>
<table [dTable]="files" #table="dataTable" style="width: 100%;" >
    <thead>
        <tr>
            <th *ngIf="selectedType">
                <md-checkbox *ngIf="files"
                            [checked]="allChecked"
                            (click)="toggleCheckAll($event)"
                            aria-label="Select all">
                </md-checkbox>
            </th>
            <th><!--icon--></th>
            <th>Name</th>
            <th>Size</th>
            <th>Mod Time</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let file of table.data">
            <!--  [ngClass]="{disabled: (selectedType.allowedType === 'folder' && !file.isFolder) || (selectedType.allowedType === 'file' && file.isFolder)}"-->
            <td *ngIf="selectedType" class="tiny-col">
                <md-checkbox
                    *ngIf="!file.isFolder"
                    [checked]="file.checked || allChecked"
                    (change)="toggleItem($event, file)">
                </md-checkbox>
            </td>
            <td class="tiny-col">
                <i class="material-icons file-icon" *ngIf="file.isFolder">folder_open</i>
                <i class="material-icons file-icon" *ngIf="!file.isFolder">insert_drive_file</i>
            </td>
            <td>
                <a *ngIf="file.isFolder" [routerLink]="['/browse', file.path | encode]">
                    {{file.name}}
                </a>
                <span *ngIf="!file.isFolder">
                    {{file.name}}
                </span>
            </td>
            <td>{{file.size | readableSize}}</td>
            <td>
                <span *ngIf="file.uploadProgress" >
                    <md-progress-bar  mode="determinate" value="{{file.uploadProgress}}"></md-progress-bar> {{file.uploadProgress}}%
                </span>
                <span *ngIf="!file.uploadProgress" >
                    {{file.mtime ? (file.mtime|elapsedTime)  : 'starting upload...'}}
                </span>
            </td>
        </tr>
    </tbody>
    <div *ngIf="table.data && !table.data.length" class="no-files-found text-muted">
        No files found in "{{selectedPath}}"
    </div>
</table>
<md-progress-circle *ngIf="!(files || error)" mode="indeterminate"></md-progress-circle>
<div *ngIf="error" [innerHtml]="error" class="error">
    {{error}}
</div>
`;


interface UploadStatus {
    name: string,
    uploadProgress: number,
    size: number
}

@Component({
    selector: 'file-table',
    template: htmlTemplate,
    styles: [cssTemplate],
    providers: [
        DataTable,
        DataTableService
    ],
})


export class FileTableComponent implements OnInit {
    files;                          // list of file meta
    path;
    pathList = [];                  // list of folder names
    error;
    selectedType;                   // selected type to upload
    allChecked: boolean = false;    // wether or not all items are checked
    selectedFiles;
    selectedCount;
    dndZone;

    //util = new Util();
    //relativeTime = this.util.relativeTime; // use pipes
    //readableSize = this.util.readableSize; // use pipes

    constructor(private router: ActivatedRoute,
        private ftp: FtpService,
        private ref: ChangeDetectorRef,
        private auth: KBaseAuth,
        private integration: KBaseIntegration) {

        this.selectedFiles = ftp.selectedFiles;
    }


    ngOnInit() {
        this.router.params.subscribe(params => {
            let path = decodeURIComponent(params['path']);
            this.path = path[0] === '/' ? path : '/' + path;
            this.pathList = this.path.split('/');
            this.loadData(this.path);

            this.initDragAndDrop();
        })
    }

    loadData(path) {
        this.ftp.selectedType$.subscribe(type => this.selectedType = type)

        // if cached, load cached data
        if (path in this.ftp.files)
            this.files = this.ftp.files[path];
        else {
            this.ftp
                .list(path)
                .subscribe(
                files => this.files = files,
                error => {
                    this.error = `Unfortunately, there's been an issue fetching your files.
                            You may wish to <a href="`+ this.integration.getConfig().resources.contact.url + `">contact us</a>.`;
                }
                )
        }

        // unchecked all files on clear event
        this.ftp.selectedFileCount$.subscribe(count => {
            if (count === 0) this.files.forEach(file => file.checked = false);
        })
    }

    toggleItem(toggle, file) {
        file.checked = toggle.checked;

        if (toggle.checked == true)
            this.ftp.selectFile(file);
        else
            this.selectedFiles = this.ftp.unselectFile(file);

    }


    toggleCheckAll(event) {
        if (this.allChecked)
            this.files.forEach(file => file.checked = false);

        this.allChecked = !this.allChecked;
    }


    // put drag and drop stuff here for now
    initDragAndDrop() {
        // treat body as drag and drop zone
        this.dndZone = document.getElementById('drag-and-drop');
        this.dndZone.addEventListener('dragover', this.onDragOver);
        this.dndZone.addEventListener("dragleave", this.onDragLeave);
        this.dndZone.addEventListener('drop', this.onDragDrop);
    }

    upload(files: FileList) {
        for (var i = 0; i < files.length; i++) {
            let file = files[i];

            let uploadStatus:UploadStatus = {
                name: file.name,
                uploadProgress: 0,
                size: 96390
            }
            this.files.unshift(uploadStatus)

            this.uploadRequest(this.integration.getConfig().services.ftp.url + '/upload', [file], this.path, uploadStatus)
                .then( (result) => {
                    this.files = this.ftp.addToCache(result, this.path)
                })
                .catch( (error) => {
                    // TODO: do something with the error
                    console.error(error);
                });
        }
    }

    uploadRequest(url: string, files: Array<File>, dest: string, uploadStatus: UploadStatus) {
        return new Promise((resolve, reject) => {
            var form = new FormData(),
                xhr = new XMLHttpRequest();

            files.forEach( (file) => {
                form.append('destPath', dest);
                form.append('uploads', file, file.name);
            });

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.upload.addEventListener("progress", function (e) {
                if (e['lengthComputable']) {
                    let percent = Math.round((e['loaded'] * 100) / e['total']);
                    uploadStatus.uploadProgress = percent;
                }
            }, false);

            xhr.open("POST", url, true);
            xhr.setRequestHeader('Authorization', this.auth.token);
            xhr.send(form);
        });
    }

    onDragLeave = (e) => {
        if (e.target['className'] == "dnd-active")
            this.dndZone.classList.remove("dnd-active");
    }

    onDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();

        //todo: support styling on IE?  or not.
        this.dndZone.classList.add("dnd-active");
        e.dataTransfer.dropEffect = 'copy';
    }

    onDragDrop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (e.target['className'] == "dnd-active")
            this.dndZone.classList.remove("dnd-active");

        var files = e.dataTransfer.files; // Array of all files
        this.upload(files);
    }

    ngOnDestroy() {
        this.dndZone.removeEventListener('dragover', this.onDragOver);
        this.dndZone.removeEventListener('dragleave', this.onDragLeave);
        this.dndZone.removeEventListener('drop', this.onDragDrop);
    }

}

