import { Injectable } from '@angular/core';
import { MenuItem } from './menuItem';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuList(): MenuItem[] {
    let items: MenuItem[] = [];
    items.push({ id:"01", descrizione:"Home", selezionato:true });
    items.push({ id:"02", descrizione:"Lista", selezionato:false });
    items.push({ id:"03", descrizione:"Modifica", selezionato:false });
    return items;
}

}
