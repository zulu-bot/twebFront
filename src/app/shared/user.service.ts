import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { LogInComponent } from '../user/log-in/log-in.component';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    idUsuario: '',
    nombre: '',
    rol: '',
    email: '',
    password: ''
    
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }
  
  register(user:User){
    return this.http.post(environment.apiBaseUrl+'/register',user, this.noAuthHeader);
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
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

  getUserProfile(){
    return this.http.get(environment.apiBaseUrl + '/userProfile');
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
    if(usuario == null){
      return null;
    }
    return(usuario["rol"]);
    
  }

}


