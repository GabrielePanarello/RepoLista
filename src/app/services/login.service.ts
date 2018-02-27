import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  private mySubject = new Subject<boolean>();
  public mySubject$ = this.mySubject.asObservable();

  constructor() { }
  
  changeSubject(value: boolean){
    this.mySubject.next(value);
  }
}
