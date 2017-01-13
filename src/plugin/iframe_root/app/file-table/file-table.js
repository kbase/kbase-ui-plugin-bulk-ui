System.register(["@angular/core", "@angular/router", "../services/ftp.service", "../services/kbase-integration.service", "../services/kbase-auth.service", "../grid/dataTable", "../grid/dataTable.service"], function (exports_1, context_1) {
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
    var core_1, router_1, ftp_service_1, kbase_integration_service_1, kbase_auth_service_1, dataTable_1, dataTable_service_1, cssTemplate, htmlTemplate, FileTableComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ftp_service_1_1) {
                ftp_service_1 = ftp_service_1_1;
            },
            function (kbase_integration_service_1_1) {
                kbase_integration_service_1 = kbase_integration_service_1_1;
            },
            function (kbase_auth_service_1_1) {
                kbase_auth_service_1 = kbase_auth_service_1_1;
            },
            function (dataTable_1_1) {
                dataTable_1 = dataTable_1_1;
            },
            function (dataTable_service_1_1) {
                dataTable_service_1 = dataTable_service_1_1;
            }
        ],
        execute: function () {
            cssTemplate = `
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
            htmlTemplate = `
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
            FileTableComponent = class FileTableComponent {
                //util = new Util();
                //relativeTime = this.util.relativeTime; // use pipes
                //readableSize = this.util.readableSize; // use pipes
                constructor(router, ftp, ref, auth, integration) {
                    this.router = router;
                    this.ftp = ftp;
                    this.ref = ref;
                    this.auth = auth;
                    this.integration = integration;
                    this.pathList = []; // list of folder names
                    this.allChecked = false; // wether or not all items are checked
                    this.onDragLeave = (e) => {
                        if (e.target['className'] == "dnd-active")
                            this.dndZone.classList.remove("dnd-active");
                    };
                    this.onDragOver = (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        //todo: support styling on IE?  or not.
                        this.dndZone.classList.add("dnd-active");
                        e.dataTransfer.dropEffect = 'copy';
                    };
                    this.onDragDrop = (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (e.target['className'] == "dnd-active")
                            this.dndZone.classList.remove("dnd-active");
                        var files = e.dataTransfer.files; // Array of all files
                        this.upload(files);
                    };
                    this.selectedFiles = ftp.selectedFiles;
                }
                ngOnInit() {
                    this.router.params.subscribe(params => {
                        let path = decodeURIComponent(params['path']);
                        this.path = path[0] === '/' ? path : '/' + path;
                        this.pathList = this.path.split('/');
                        this.loadData(this.path);
                        this.initDragAndDrop();
                    });
                }
                loadData(path) {
                    this.ftp.selectedType$.subscribe(type => this.selectedType = type);
                    // if cached, load cached data
                    if (path in this.ftp.files)
                        this.files = this.ftp.files[path];
                    else {
                        this.ftp
                            .list(path)
                            .subscribe(files => this.files = files, error => {
                            this.error = `Unfortunately, there's been an issue fetching your files.
                            You may wish to <a href="` + this.integration.getConfig().resources.contact.url + `">contact us</a>.`;
                        });
                    }
                    // unchecked all files on clear event
                    this.ftp.selectedFileCount$.subscribe(count => {
                        if (count === 0)
                            this.files.forEach(file => file.checked = false);
                    });
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
                upload(files) {
                    for (var i = 0; i < files.length; i++) {
                        let file = files[i];
                        let uploadStatus = {
                            name: file.name,
                            uploadProgress: 0,
                            size: 96390
                        };
                        this.files.unshift(uploadStatus);
                        this.uploadRequest(this.integration.getConfig().services.ftp.url + '/upload', [file], this.path, uploadStatus)
                            .then((result) => {
                            this.files = this.ftp.addToCache(result, this.path);
                        })
                            .catch((error) => {
                            // TODO: do something with the error
                            console.error(error);
                        });
                    }
                }
                uploadRequest(url, files, dest, uploadStatus) {
                    return new Promise((resolve, reject) => {
                        var form = new FormData(), xhr = new XMLHttpRequest();
                        files.forEach((file) => {
                            form.append('destPath', dest);
                            form.append('uploads', file, file.name);
                        });
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
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
                ngOnDestroy() {
                    this.dndZone.removeEventListener('dragover', this.onDragOver);
                    this.dndZone.removeEventListener('dragleave', this.onDragLeave);
                    this.dndZone.removeEventListener('drop', this.onDragDrop);
                }
            };
            FileTableComponent = __decorate([
                core_1.Component({
                    selector: 'file-table',
                    template: htmlTemplate,
                    styles: [cssTemplate],
                    providers: [
                        dataTable_1.DataTable,
                        dataTable_service_1.DataTableService
                    ],
                }),
                __metadata("design:paramtypes", [router_1.ActivatedRoute,
                    ftp_service_1.FtpService,
                    core_1.ChangeDetectorRef,
                    kbase_auth_service_1.KBaseAuth,
                    kbase_integration_service_1.KBaseIntegration])
            ], FileTableComponent);
            exports_1("FileTableComponent", FileTableComponent);
        }
    };
});
//# sourceMappingURL=file-table.js.map