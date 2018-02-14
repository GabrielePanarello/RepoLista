import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuItem';
import { MenuService } from '../menu-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  items: MenuItem[];

  constructor() { 
    let menuService:MenuService= new MenuService();
    this.items = menuService.getMenuList();
  }

  ngOnInit(){
    this.items.push(new MenuItem()); 
  }
}
