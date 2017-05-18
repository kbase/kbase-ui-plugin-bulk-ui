import { Component } from '@angular/core';

import { FtpService } from './services/ftp.service';
import { KBaseRpc } from './services/kbase-rpc.service';
import { KBaseAuth } from './services/kbase-auth.service';

@Component({
    selector: 'my-app',
    template: `<md-sidenav-layout>

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
