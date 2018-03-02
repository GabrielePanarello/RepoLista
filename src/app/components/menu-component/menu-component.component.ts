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
export class MenuComponentComponent implements OnInit {

  items: MenuItem[];
  users: User[];
  username: string;
  isAdmin = false;

  constructor() { 
    let menuService : MenuService = new MenuService();
    let userService : UserService = new UserService();
    this.items = menuService.getMenuList();
    this.users = userService.getUsersList();
  }

  ngOnInit(){
    if(sessionStorage.getItem('key') != null){
      this.username = sessionStorage.getItem('key');
      for(let user of this.users){
        if(user.user == this.username){
          if(user.isAdmin == true){
            this.isAdmin = true;
            for(let item of this.items){
              if(item.descrizione == "modifica"){
                item.visualizzato = true;
              }
            }
          }
        }
      }
    }
  }


}

