// created with the terminal command "ng g g products/product-detail" that is used to create guards
/* use route guard any time you xwant to prevent access to a route,
 * confirm nvigation away from a route
 * or preload data for a route
 *
 * Build a guard service => implement the guard type (canActivate) and create the method(canActivate())
 * Register the guard service provider => use the prodeIn property
 * Add the guard to the desired route
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1 ) {
    alert("invalid product Id");
    this.router.navigate(['/products']);
    return false;
    }
    return true;
  }

}
