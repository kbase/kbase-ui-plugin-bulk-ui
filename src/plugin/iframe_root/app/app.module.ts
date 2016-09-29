import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { HttpModule } from '@angular/http';

// Angular2 Materialize 
import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule } from '@angular2-material/sidenav'
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdProgressBarModule } from '@angular2-material/progress-bar';

// App 
import { AppComponent }  from './app.comptest';
import { AppRoutes }        from './app.routes';

// Components
import { ToolbarComponent } from './toolbar/toolbar';
import { FileTableComponent } from './file-table/file-table';
import { FileTreeComponent } from './file-tree/file-tree';
import { DataTable } from './grid/dataTable';
import { CardDirective } from './card/card';


// Views
import { SelectorView } from './selector.view/selector.view';
import { EditMetaView } from './edit-meta.view/edit-meta.view';
import { AboutView } from './about.view/about.view';
import { StatusView } from './status.view/status.view';
import { ImportDetailsView } from './import-details.view/import-details.view';
import { JobLogView } from './job-log.view/job-log.view';
import { HomeView } from './home.view/home.view';

// Pipes
import { Encode, ElapsedTime, ReadableSize} from './services/pipes';

// Services
import { FtpService } from './services/ftp.service';
import { KBaseRpc } from './services/kbase-rpc.service';
import { KBaseAuth } from './services/kbase-auth.service';
import { KBaseIntegration } from './services/kbase-integration.service';
import { KBaseConfig } from './services/kbase-config.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MdButtonModule.forRoot(),
        MdSidenavModule.forRoot(),
        MdProgressCircleModule.forRoot(),
        MdCheckboxModule.forRoot(),
        MdProgressBarModule.forRoot(),
        RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        FileTableComponent,
        FileTreeComponent,
        CardDirective,
        SelectorView,
        EditMetaView,
        AboutView,
        StatusView,
        ImportDetailsView,
        JobLogView,
        HomeView,
        Encode,
        ElapsedTime,
        ReadableSize,
        DataTable
    ], 
    providers: [
        FtpService,
        KBaseRpc,
        KBaseAuth,
        KBaseIntegration,
        KBaseConfig
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {   
}