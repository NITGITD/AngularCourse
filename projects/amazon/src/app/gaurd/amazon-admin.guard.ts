import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonAdminGuard implements CanActivate {

  constructor(private router:Router){}
  public UserRole:string="customer";
  canActivate():boolean{
    if(this.UserRole!=="admin"){
      this.router.navigate(['login']);
    };
    return true;
  }
  
}
