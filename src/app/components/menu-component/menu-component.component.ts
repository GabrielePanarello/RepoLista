import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../objs/menuItem';
import { MenuService } from '../../services/menu-service';
import { User } from '../../objs/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  isAdmin = false;
  username: string;

  constructor() {
    let menuService: MenuService = new MenuService();
    let userService: UserService = new UserService();
    this.items = menuService.getMenuList();
    this.isAdmin = userService.checkIsLogged(sessionStorage.getItem('key'));
  }

  ngOnInit() {

    if (!this.isAdmin) {
      for (let item of this.items) {
        if (item.descrizione == "modifica") {
          item.visualizzato = true;
        }
      }
    }else{
      this.username = sessionStorage.getItem('key');
      this.username = this.username.toLocaleUpperCase();
    }

    
  }


}

