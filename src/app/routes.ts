import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminperfilComponent  } from './adminperfil/adminperfil.component';
import { GenerarreporteComponent } from './generarreporte/generarreporte.component';
import{ PerfilresponsableComponent } from './perfilresponsable/perfilresponsable.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AdministradorComponent } from './administrador/administrador.component';
import{ InvestigadorComponent } from './investigador/investigador.component';
import{ ListperfilComponent } from './listperfil/listperfil.component';
import { ListadecasosComponent } from './listadecasos/listadecasos.component';
import { Component } from '@angular/core';
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
        path: 'adminusuario',
        component: AdminperfilComponent
    },
    {
        path: 'generarreporte',
        component: GenerarreporteComponent
    },
    {
    path: 'responsable',
    component: PerfilresponsableComponent 
    },
    {
    path: 'reportes',
    component: ReportesComponent
    },
    {
        path: 'administrador',
        component: AdministradorComponent
    },
    {
        path: 'investigador',
        component: InvestigadorComponent
    },
    {
        path: 'listaperfiles',
        component: ListperfilComponent
    },
    {
        path: 'listadecasos',
        component: ListadecasosComponent
    }
];