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

}
