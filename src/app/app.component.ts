import { Component, ViewChild } from '@angular/core';
import { MenuItem } from './objs/menuItem';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogged : boolean;

constructor(private loginService: LoginService, private router: Router){
  this.loginService.mySubject$.subscribe ((newValue: boolean) => {
    this.isLogged = newValue;
  });
}











}

