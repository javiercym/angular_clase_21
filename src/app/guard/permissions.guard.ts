import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})


export class PermissionsGuard implements CanActivate {

  constructor(private loginService: LoginService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    //aqui va toda la logica para los permisos del guard
    if (this.hasUser()) {
      return true;
    }else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No estas logeado'
      })

      return false;
    }
  
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  }

  hasUser(){
    return this.loginService.globalVariable;
  }
  
}
