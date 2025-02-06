import { Routes } from '@angular/router';
import { ViewAnnouncementComponent } from './view-announcement/view-announcement.component';
import { AnnouncementComponent } from './announcement/announcement.component';

export const announcementhome: Routes = [
    {path: 'announcementpage', component: ViewAnnouncementComponent,
        children: [
            {path: 'announcement', component: AnnouncementComponent},
            // {path: 'approve', component: ListpageComponent},
            // {path: 'view', component: ViewViewComponent},
            {path: '', redirectTo: 'announcement', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'announcementpage', pathMatch: 'full'}
];
