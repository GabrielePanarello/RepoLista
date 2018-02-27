import { Component } from '@angular/core';
import { MenuItem } from './objs/menuItem';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogged = false;

constructor(private loginService: LoginService){
  this.loginService.mySubject$.subscribe ((newValue: boolean) => {
    this.isLogged = newValue;
  });
}

ngOnInit(){
  if(sessionStorage.getItem('key') != null){
    this.isLogged = true;
  }
}



}

