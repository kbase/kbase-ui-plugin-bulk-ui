

import { Component, Input} from '@angular/core';
import { KBaseAuth } from '../services/kbase-auth.service';
// import htmlTemplate from './toolbar.html!text';
// import cssTemplate from './toolbar.css!text';

const htmlTemplate = `
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
    <a md-button href="http://kbase.us/bulk-upload-guide/" target="_blank" class="nav-btn">
        <i class="material-icons">help_outline</i><br>
        Documentation
    </a>
</span>
</nav>
`

const cssTemplate = `
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
.nav-btns a {
    margin-top: 0px;
    color: #0088cc !important;
}
.nav-btns a i {
    font-size: 2.1em;
    position: relative;
    bottom: -10px;
}}
`

@Component({
  selector: 'toolbar',
  template: htmlTemplate,
  styles: [cssTemplate],
  providers: []
})

export class ToolbarComponent {
    @Input() sidenav;

    user;

    constructor(private auth: KBaseAuth) {
        this.user = auth.getUsername();
    }

    toggleSidenav() {
         this.sidenav.toggle();
    }

}
