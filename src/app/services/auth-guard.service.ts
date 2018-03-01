import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, CanDeactivate } from '@angular/router';
import { AuthService } from './auth.service';
import { EditGameComponentComponent } from '../components/edit-game-component/edit-game-component.component';

@Injectable()
export class AuthGuardService implements CanActivate, CanDeactivate<EditGameComponentComponent>{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {

    if (sessionStorage.getItem('key') == null) {
      this.router.navigate(['/login']);
    } else {
      return true;
    }
  }

  canDeactivate(component: EditGameComponentComponent) {
    return this.authService.isModified;
  }

}
