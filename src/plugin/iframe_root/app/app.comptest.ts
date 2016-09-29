import { Component } from '@angular/core';

import { FtpService } from './services/ftp.service';
import { KBaseRpc } from './services/kbase-rpc.service';
import { KBaseAuth } from './services/kbase-auth.service';

@Component({
    selector: 'my-app',
    template: `<md-sidenav-layout>

            <md-sidenav #sidenav mode="over" id="kbase-sidenav">
                <ul class="list-unstyled">
                    <li>
                        <a href="/#narrativemanager/start">
                            <i class="icon-file"></i> Narrative
                        </a>
                    </li>
                    <li>
                        <a href="/#appcatalog">
                        <i class="icon-book"></i> App Catalog</a>
                    </li>
                    <li>
                        <a href="/search/#/search/?q=*">
                        <i class="icon-search"></i> Search</a>
                    </li>
                    <li>
                        <a href="/#dashboard">
                        <i class="icon-tachometer"></i> Dashbaord</a>
                    </li>
                    <li><hr class="no-margin"></li>
                    <li>
                        <a href="https://kbase.us/contact" target="_blank">
                        <i  class="icon-envelope-o"></i> Contact KBase</a>
                    </li>
                    <li>
                        <a href="https://kbase.us/about" target="_blank">
                        <i class="icon-info-circle"></i> About KBase</a>
                    </li>
                </ul>
            </md-sidenav>

            <toolbar [sidenav]="sidenav"></toolbar>

            <div class="content">
                <router-outlet></router-outlet>
            </div>

        </md-sidenav-layout>`
})

export class AppComponent {
    constructor(
        ftpService: FtpService,
        authService: KBaseAuth
    ) {
    }
}
