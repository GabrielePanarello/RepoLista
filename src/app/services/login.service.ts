import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  private check = false;
  private mySubject = new Subject<boolean>();
  public mySubject$ = this.mySubject.asObservable();

  constructor() { }
  

  changeSubject(value: boolean){
    this.mySubject.next(value);
  }

  setLogin(value: boolean){
    this.check = value;
  }

  getLogin():boolean{
    return this.check;
  }

}
