import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../objs/user';

@Directive({
  selector: '[appGameStyle]'
})
export class GameStyleDirective {

  users: User[];
  username: string;
  @Input('appGameStyle') color: string;

  constructor(private el: ElementRef) {
    let userService: UserService = new UserService();
    this.users = userService.getUsersList();
  }

  //Cambio colore in base all'utente
  /*@HostListener('mouseenter') onMouseEnter(){
    if (sessionStorage.getItem('key') != null) {
      this.username = sessionStorage.getItem('key');
      for (let user of this.users) {
        if (user.user == this.username) {
          if (user.isAdmin == true) {
            this.el.nativeElement.style.backgroundColor = "orange";
          } else{
            this.el.nativeElement.style.backgroundColor = "yellow";
          }
        }
      }
    }
  }*/

  @HostListener('mouseenter') onMouseEnter() {
    switch (this.color) {

      case 'Sport':
        this.el.nativeElement.style.backgroundColor = "orange";
        break;

      case 'RPG':
        this.el.nativeElement.style.backgroundColor = "yellow";
        break;

      case 'FPS':
        this.el.nativeElement.style.backgroundColor = "red";
        break;

      case 'Fantasy':
        this.el.nativeElement.style.backgroundColor = "blue";
        break;

      default:
      case 'Sport':
        this.el.nativeElement.style.backgroundColor = "cyan";

    }
  }



  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = "white";
  }

}
