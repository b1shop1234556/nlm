import { Routes } from '@angular/router';
import { LeaveMainPageComponent } from './leave-main-page/leave-main-page.component';
import { LeaveComponent } from './leave/leave.component';
import { ApplyRequestComponent } from './apply-request/apply-request.component';

export const leavehome: Routes = [
    {path: 'leavepage', component: LeaveMainPageComponent,
        children: [
            {path: 'leave', component: LeaveComponent},
            {path: 'apply', component: ApplyRequestComponent},
            // {path: 'view', component: ViewViewComponent},
            {path: '', redirectTo: 'leave', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'leavepage', pathMatch: 'full'}
];
