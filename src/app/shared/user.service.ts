import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { LogInComponent } from '../user/log-in/log-in.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials);
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }
}


