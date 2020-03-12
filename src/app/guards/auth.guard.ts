import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

/**
 * @author Harsh Mistry
 * 
 * Guard to authenticate any route change. 
 * It checks if user is logged in before route is activated.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
    
    constructor(private _loginService: LoginService,
                private router: Router) {
    }

    /**
     * Check if user is logged in before navigating any route
     */
    canActivate() {
        if (this._loginService.isUserLoggedIn()) {
            return true;
        }
        return this.router.navigate(['login']);
    }
}