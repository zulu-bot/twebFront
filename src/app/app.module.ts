import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { UserComponent } from './user/user.component';
import { NotificacionComponent } from './notificacion/notificacion.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//routes
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { MessageService } from './message.service';

//auth
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';


import { from } from 'rxjs';
import { AdminperfilComponent } from './adminperfil/adminperfil.component';
import { GenerarreporteComponent } from './generarreporte/generarreporte.component';
import { PerfilresponsableComponent } from './perfilresponsable/perfilresponsable.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { InvestigadorComponent } from './investigador/investigador.component';
import { ListperfilComponent } from './listperfil/listperfil.component';
import { ListadecasosComponent } from './listadecasos/listadecasos.component';
import { RegisterComponent } from './user/register/register.component';
import { RedirecterComponent } from './redirecter/redirecter.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    LogInComponent,
    UserComponent,
    AdminperfilComponent,
    GenerarreporteComponent,
    PerfilresponsableComponent,
    ReportesComponent,
    AdministradorComponent,
    InvestigadorComponent,
    ListperfilComponent,
    ListadecasosComponent,
    NotificacionComponent,
    RegisterComponent,
    RedirecterComponent
  
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true},AuthGuard, UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
