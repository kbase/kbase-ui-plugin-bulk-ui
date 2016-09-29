import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

import { FtpService } from '../services/ftp.service';
import { Folder } from '../services/folder';

const cssTemplate = `
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
}`

const htmlTemplate = `
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
`

@Component({
  selector: 'file-tree',
  template: htmlTemplate,
  styles: [cssTemplate],
  providers: [

  ]
})

export class FileTreeComponent implements OnInit {
    @Input('folders') folders: Folder[];
    @Input() selectedPath;
    @Input() onSelect;

    selectedFolder: Folder;

    constructor(
        private _ftpService: FtpService) {

    }

    ngOnInit() {}

    expandFolder($e, folder: Folder) {
        $e.preventDefault();
        $e.stopPropagation();
        folder.expanded = !folder.expanded;

        if (folder.expanded) {
            this._ftpService.list(folder.path)
                .subscribe(newFolders => folder.folders = newFolders)
        } else {
            folder.folders = [];
        }
    }

    selectFolder($e, folder: Folder) {
        this._ftpService.setPath(folder.path)
        //this.onSelect(folder);
    }



}
