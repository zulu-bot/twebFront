import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Incidents } from './shared/incidents.model';
import { RouterLink } from '@angular/router';
import { ListaIncidentesComponent } from './lista-incidentes/lista-incidentes.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  selectedIncident: Incidents = {
    idIncidente: '',
	nivelImpacto: '',
	idEmpleado: '',
	idInvestigador: '',
    descripcion: '',
	fechaInicio: '',
	fechaFinal: '',
	estado: ''
    
  };

  constructor(private http: HttpClient) { }

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials);
  }
  
  register(incident:Incidents){
    return this.http.post(environment.apiBaseUrl+'/registerincident',incident);
  }

  getAll(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/listincident');
    
}

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  deletToken(){
    localStorage.removeItem('token');
  }

  getUserInfo(){
    var token = localStorage.getItem('token');
    if (token){
      var userInfo =atob(token.split('.')[1]);
      return JSON.parse(userInfo);
    }
    else
      return null;
  }


  isLogged(){
    var userInfo = this.getUserInfo();
    if (userInfo)
      return userInfo.exp > Date.now() / 1000;
    else
      return false;
  }

  getRolUsuario(){
    let usuario = this.getUserInfo();
    return(usuario["rol"]);
    
  }

}



