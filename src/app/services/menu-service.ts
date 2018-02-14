import { Injectable } from '@angular/core';
import { MenuItem } from '../objs/menuItem';


@Injectable()
export class MenuService {

  constructor() { }

  private items:MenuItem [] = [
    new MenuItem("01","Home",true),
    new MenuItem("02","Lista",false),
    new MenuItem("03","Dettaglio",false),
    new MenuItem("04","Modifica",false)
  ];

  getMenuList(): MenuItem[] {
    return this.items;
}

}
