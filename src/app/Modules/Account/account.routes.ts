import { Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { AccountComponent } from './account/account.component';



export const accounthome: Routes = [
    {path: 'accountmain', component: AccountPageComponent,
        children: [
            {path: 'account', component: AccountComponent},
            // {path: 'approve', component: ListpageComponent},
            // {path: 'view', component: ViewViewComponent},
            {path: '', redirectTo: 'account', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'accountmain', pathMatch: 'full'}
];
