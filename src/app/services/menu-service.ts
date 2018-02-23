import { Injectable } from '@angular/core';
import { MenuItem } from '../objs/menuItem';


@Injectable()
export class MenuService {

  constructor() { }

  private items:MenuItem [] = [
    new MenuItem("01","home"),
    new MenuItem("02","lista"),
    new MenuItem("03","modifica"),
    new MenuItem("04","dettaglio",true),
    new MenuItem("05","login",true)
  ];

  getMenuList(): MenuItem[] {
    return this.items;
}


}
