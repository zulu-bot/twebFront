import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { RegisterComponent } from './user/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { from } from 'rxjs';

export const appRoutes: Routes =[
    {
        path: 'login', component: UserComponent,
        children: [{path: '', component: LogInComponent}]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },  
    {
        path: 'register', component: UserComponent,
        children: [{path: '', component: RegisterComponent}]
    }
    
];