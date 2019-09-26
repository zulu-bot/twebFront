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

  constructor(private http: HttpClient) { }

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials);
  }
  
  register(user:User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
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


