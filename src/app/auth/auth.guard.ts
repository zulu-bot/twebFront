import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.userService.isLogged()) {
        this.router.navigateByUrl('/login');
        this.userService.deletToken();


        return false;
      }
      let rol = this.userService.getRolUsuario();
      console.log("authguard ", rol);
      
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
     
    return true;
  }


  
}
