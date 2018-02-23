import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';

@Injectable()
export class AuthService {
  isLogged = false;
  isModified = true;
  constructor() { }

  checkLogin(user: string, psw: string):boolean{
    if(user == "ciao" && psw == "ciao"){
      sessionStorage.setItem('key',user);
      return this.isLogged = true;
    }
  }

  checkItemSign(item: GameItem, modifiedItem:GameItem, isClicked: boolean){
    if (JSON.stringify(item) != JSON.stringify(modifiedItem)){
      this.isModified = false;
      console.log("Modificato");
    }else{
      this.isModified = true;
      console.log("NON Modificato");
    }

    if(isClicked == true){
      this.isModified = true;
    }
  }
}
