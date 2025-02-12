import { Routes } from '@angular/router';
import { ViewMainPageComponent } from './view-main-page/view-main-page.component';
import { ViewComponent } from './view/view.component';
import { ApproveRequestComponent } from './approve-request/approve-request.component';
import { MyLeaveRequestComponent } from './my-leave-request/my-leave-request.component';
import { RejectRequestComponent } from './reject-request/reject-request.component';

export const profilehome: Routes = [
    {path: 'profile', component: ViewMainPageComponent,
        children: [
            {path: 'view', component: ViewComponent},
            {path: 'approve', component: ApproveRequestComponent},
            {path: 'leave', component: MyLeaveRequestComponent},
            {path: 'reject', component: RejectRequestComponent},
            {path: '', redirectTo: 'view', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'profile', pathMatch: 'full'}
];
