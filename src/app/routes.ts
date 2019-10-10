import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {RedirecterComponent } from './redirecter/redirecter.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminperfilComponent  } from './adminperfil/adminperfil.component';
import { GenerarreporteComponent } from './generarreporte/generarreporte.component';
import{ PerfilresponsableComponent } from './perfilresponsable/perfilresponsable.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AdministradorComponent } from './administrador/administrador.component';
import{ InvestigadorComponent } from './investigador/investigador.component';
import{ ListperfilComponent } from './listperfil/listperfil.component';
import { ListadecasosComponent } from './listadecasos/listadecasos.component';
import { RegisterComponent } from './user/register/register.component';
import { Component } from '@angular/core';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { AuthGuardAdmin } from './auth/authAdmin.guard';
import { AuthGuardResponsable } from './auth/authResponsable.guard';
import { AuthGuardInvestigador } from './auth/authInvestigador.guard';
import { AuthGuardEmpleado } from './auth/authEmpleado.guard';
import { ListaIncidentesComponent } from './lista-incidentes/lista-incidentes.component';
export const appRoutes: Routes =[
    {
        path: 'login', component: UserComponent,
        children: [{path: '', component: LogInComponent}]
    },
    {
        path: 'redirecter', component: UserProfileComponent, canActivate: [AuthGuard]
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
        path: 'listaincidente',
        component: ListaIncidentesComponent
    },
    {
    path: 'responsable',
    component: PerfilresponsableComponent,  canActivate: [AuthGuardResponsable]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'reportes',
        component: ReportesComponent, canActivate: [AuthGuardInvestigador]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'administrador',
        component: AdministradorComponent, canActivate: [AuthGuardAdmin]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'investigador',
        component: InvestigadorComponent, canActivate: [AuthGuardInvestigador]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'listaperfiles',
        component: ListperfilComponent, canActivate: [AuthGuardAdmin]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'listadecasos',
        component: ListadecasosComponent
    },
    {
        path: 'register',
        component: UserComponent,canActivate: [AuthGuardAdmin],
        children: [{path:'',component: RegisterComponent}]
    },{
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'notificacion',
        component: NotificacionComponent
    },
    {
        path: 'userprofile',
        component: UserProfileComponent, canActivate: [AuthGuardEmpleado]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
     }
];