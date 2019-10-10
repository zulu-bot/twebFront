import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardEmpleado implements CanActivate {
  constructor(private userService: UserService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        let rol = this.userService.getRolUsuario();
        console.log("admin guard  ", rol);
        
      if (!this.userService.isLogged()) {
        this.router.navigateByUrl('/login');
        this.userService.deletToken();


        return false;
      }
      if (rol == "empleado" || rol == "asociado") {
        return true;
      }
      else{
        this.router.navigateByUrl('/login');
        this.userService.deletToken();


        return false;
      }
      
     
    return true;
  }


  
}
