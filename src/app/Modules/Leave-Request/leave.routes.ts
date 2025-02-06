import { Routes } from '@angular/router';
import { LeaveMainPageComponent } from './leave-main-page/leave-main-page.component';
import { LeaveComponent } from './leave/leave.component';

export const leavehome: Routes = [
    {path: 'leavepage', component: LeaveMainPageComponent,
        children: [
            {path: 'leave', component: LeaveComponent},
            // {path: 'approve', component: ListpageComponent},
            // {path: 'view', component: ViewViewComponent},
            {path: '', redirectTo: 'leave', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'leavepage', pathMatch: 'full'}
];
