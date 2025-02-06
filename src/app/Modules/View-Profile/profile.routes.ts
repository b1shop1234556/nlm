import { Routes } from '@angular/router';
import { ViewMainPageComponent } from './view-main-page/view-main-page.component';
import { ViewComponent } from './view/view.component';

export const profilehome: Routes = [
    {path: 'homepage', component: ViewMainPageComponent,
        children: [
            {path: 'view', component: ViewComponent},
            // {path: 'approve', component: ListpageComponent},
            // {path: 'view', component: ViewViewComponent},
            {path: '', redirectTo: 'view', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'homepage', pathMatch: 'full'}
];
