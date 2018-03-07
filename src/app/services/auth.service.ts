import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';
import { UserService } from './user.service';
import { User } from '../objs/user';

@Injectable()
export class AuthService {
  isModified = true;
  users:  User[];

  constructor() {
    let userService : UserService = new UserService();
    this.users = userService.getUsersList();
   }

  checkLogin(username: string, password: string): boolean {
    for(let user of this.users){
    if (username == user.user && password == user.psw) {
      sessionStorage.setItem('key', username);
      return true;
    }
  }

  }

  checkItemSign(item: GameItem, modifiedItem: GameItem, isClicked: boolean) {

    console.log("Item 1: "+ JSON.stringify(item) + "\n\nItem 2 "+JSON.stringify(modifiedItem));
    if (JSON.stringify(item) != JSON.stringify(modifiedItem)) {
      this.isModified = false;
    } else {
      this.isModified = true;
    }

    if (isClicked == true) {
      this.isModified = true;
    }
  }
}
