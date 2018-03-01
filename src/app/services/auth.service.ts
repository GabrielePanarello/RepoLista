import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';

@Injectable()
export class AuthService {
  isModified = true;

  constructor() { }

  checkLogin(user: string, psw: string): boolean {
    if (user == "ciao" && psw == "ciao") {
      sessionStorage.setItem('key', user);
      return true;
    }
  }

  checkItemSign(item: GameItem, modifiedItem: GameItem, isClicked: boolean) {

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
