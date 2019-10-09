import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log("nombre", this.userDetails.nombre, this.userDetails.email);
        
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.userService.deletToken();
    this.router.navigate(['/login']);
  }
  goToEdit(){
    this.router.navigate(['/adminusuario']);
  }
  goToReporte(){
    this.router.navigate(['/generarreporte']);
  }

}
