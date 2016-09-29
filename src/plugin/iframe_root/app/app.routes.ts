
import { SelectorView } from './selector.view/selector.view';
import { EditMetaView } from './edit-meta.view/edit-meta.view';
import { AboutView } from './about.view/about.view';
import { StatusView } from './status.view/status.view';
import { ImportDetailsView } from './import-details.view/import-details.view';
import { JobLogView } from './job-log.view/job-log.view';
import { FileTableComponent } from './file-table/file-table';
import { HomeView } from './home.view/home.view';

import { AuthGuard } from './auth.guard';

export const AppRoutes = [
    {
        // See app/services/kbase-auth.service.ts for auth handling
        path: 'browse',
        component: SelectorView,
        //canActivate: [AuthGuard],
        children: [{
            path: ':path',
            component: FileTableComponent
        }]
    }, {
        path: 'intro',
        component: HomeView,
    }, {
        path: 'about',
        component: AboutView,
    }, {
        path: 'edit-meta',
        component: EditMetaView
    }, {
        path: 'status',
        component: StatusView
    }, {
        path: 'import-details/:id',
        component: ImportDetailsView
    }, {
        path: 'job-log/:id',
        component: JobLogView
    }, {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    }
]