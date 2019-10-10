import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminperfil',
  templateUrl: './adminperfil.component.html',
  styleUrls: ['./adminperfil.component.css']
})
export class AdminperfilComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  userDetails;

  onSubmit(form: NgForm) {
    console.log("asdf");
    console.log(form.value);
    this.userService.update(form.value).subscribe(
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }else{
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          }
        }
      );
    }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log("nombre", this.userDetails.nombre, this.userDetails.email);
        
      },
      err => { 
        console.log(err);
        
      });

      
  }

  goBack(){
    this.router.navigate(['/redirecter']);
  }

}
