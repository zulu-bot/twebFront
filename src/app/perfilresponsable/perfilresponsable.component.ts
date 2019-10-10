import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-perfilresponsable',
  templateUrl: './perfilresponsable.component.html',
  styleUrls: ['./perfilresponsable.component.css']
})
export class PerfilresponsableComponent implements OnInit { userDetails;
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

  
  goEdit(){
    this.router.navigate(['/adminusuario']);
  }
  goReporte(){
    this.router.navigate(['/generarreporte']);
  }

}
