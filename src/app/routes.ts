import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const appRoutes: Routes =[
    {
        path: 'login', component: UserComponent,
        children: [{path: '', component: LogInComponent}]
    },
    {
        path: 'userprofile', component: UserProfileComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
    
];