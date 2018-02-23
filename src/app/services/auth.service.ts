import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLogged = false;
  constructor() { }

  checkLogin(user: string, psw: string):boolean{
    if(user == "ciao" && psw == "ciao"){
      sessionStorage.setItem('key',user);
      return this.isLogged = true;
    }
  }
}
