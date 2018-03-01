import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthLogin implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        if (sessionStorage.getItem('key') == null) {
            return true;
        } else {
            this.router.navigate(['/home']);
            return false;
        }
    }

}
