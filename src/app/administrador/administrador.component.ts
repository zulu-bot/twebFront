import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
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

  goEdit(){
    this.router.navigate(['/adminusuario']);
  }
  goReporte(){
    this.router.navigate(['/generarreporte']);
  }
  regist(){
    this.router.navigate(['/register']);
  }

}
