import { Routes } from '@angular/router';
import { DashMainPageComponent } from './dash-main-page/dash-main-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';



export const dashboardhome: Routes = [
    {path: 'dashmain', component: DashMainPageComponent,
        children: [
            {path: 'dash', component: DashBoardComponent},
            // {path: 'approve', component: ListpageComponent},
            // {path: 'view', component: ViewViewComponent},
            {path: '', redirectTo: 'dash', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'dashmain', pathMatch: 'full'}
];
