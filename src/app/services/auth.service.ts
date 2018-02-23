import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';

@Injectable()
export class AuthService {
  isLogged = false;
  isModified = false;
  constructor() { }

  checkLogin(user: string, psw: string):boolean{
    if(user == "ciao" && psw == "ciao"){
      sessionStorage.setItem('key',user);
      return this.isLogged = true;
    }
  }

  checkItemSign(item: GameItem, modifiedItem:GameItem){
    if (item != modifiedItem){
      this.isModified = false;
      console.log("Modificato");
    }else{
      this.isModified = true;
      console.log("NON Modificato");
    }
  }
}
