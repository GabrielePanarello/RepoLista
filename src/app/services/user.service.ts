import { Injectable } from '@angular/core';
import { MenuItem } from '../objs/menuItem';
import { User } from '../objs/user';


@Injectable()
export class UserService {

  constructor() { }

  private users:User [] = [
    new User("01","ciao","ciao",true),
    new User("02","utente","utente",false)
  ];

  getUsersList(): User[] {
    return this.users;
}

 checkIsLogged(sessionValue: string): boolean{
  if (sessionValue != null) {
    for (let user of this.users) {
      if (user.user == sessionValue) {
        if (user.isAdmin == true) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
 }

}
