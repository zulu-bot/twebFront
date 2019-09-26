import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {UserService } from '../../shared/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor( private userService: UserService, private router : Router) { }

  model ={
    email: '',
    password: '',
    rol: ''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        let rol = this.userService.getRolUsuario();
        if(rol == 'administrador'){
          this.router.navigateByUrl('/administrador');
        }
        if(rol == 'investigador'){
          this.router.navigateByUrl('/investigador');
        }
        if(rol == 'responsable'){
          this.router.navigateByUrl('/responsable');
        }
        if(rol == 'empleado'){
          this.router.navigateByUrl('/userprofile');
        }
        if(rol == 'asociado'){
          this.router.navigateByUrl('/userprofile');
        }

        
        
      },
      err => {
        this.serverErrorMessages = err.console.error.message;
        
      }
    );
  }

}
