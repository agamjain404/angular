import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
// AuthGuard is a simple service in=mplementing two interfaces to activate a route on the basis of authentication. It is injectable as it is injecting a AuthenticationService to check if user is authenticated or not
export class AuthGaurd implements CanActivate, CanActivateChild {

    // Created a fake auth service which let us know whether the user is logged in or not
    constructor(private authService: AuthService, private router: Router) {

    }

    // canActivate method is provided by CanActivate Interface from which we can decide if we want to activate a parent route or not
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().then((authenticated: boolean) => {
            if (authenticated) {
                return true;
            } else {
                this.router.navigate(['/']);
            }
        })
    }

    // canActivateChild Method is provided by CanActivateChild Interface with which we can decide a children route is activated or not
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }
}