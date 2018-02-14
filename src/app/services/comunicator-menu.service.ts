import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable() 
export class ComunicatorServiceMenu {
  private mySubject = new Subject<string>();
  public mySubjects = this.mySubject.asObservable();

  changeSubject(currentMenu: string){
    this.mySubject.next(currentMenu);
  }
  
}