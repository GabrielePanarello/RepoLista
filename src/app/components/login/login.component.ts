import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  psw: string;

  constructor(private authService: AuthService, private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {
  }

  submitLogin(){
    if(this.user != "" && this.psw != "" && this.authService.checkLogin(this.user,this.psw) == true){
        this.loginService.changeSubject(true);
        this.router.navigate(['/home']);
    }
  }
}
