import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { EditGameComponent } from '../components/edit-game-component/edit-game-component.component';
import { UserService } from './user.service';
import { User } from '../objs/user';

@Injectable()
export class AuthGuardService implements CanActivate, CanDeactivate<EditGameComponent>{

  users: User[];

  constructor(private authService: AuthService, private router: Router) { 
    let userService: UserService = new UserService();
    this.users = userService.getUsersList();  
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (sessionStorage.getItem('key') == null) {
      this.router.navigate(['/login']);
    } else {
      if(state.url.indexOf("modifica") != -1){
        for (let user of this.users) {
          if (user.user == sessionStorage.getItem('key') && user.isAdmin != true) {
            this.router.navigate(['/home']);
          }
        }
      }
      return true;
    }
  }

  canDeactivate(component: EditGameComponent) {
    return this.authService.isModified;
  }

}
