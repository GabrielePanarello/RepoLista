import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../objs/menuItem';
import { MenuService } from '../../services/menu-service';
import { ComunicatorServiceMenu } from '../../services/comunicator-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  items: MenuItem[];

  constructor(private comunicatorService : ComunicatorServiceMenu) { 
    let menuService:MenuService = new MenuService();
    this.items = menuService.getMenuList();
  }

  ngOnInit(){
    this.items.push(new MenuItem()); 
  }

  showData(item: string){
    this.comunicatorService.changeSubject(item);
  }

  selectSection(id:string){

    this.items.forEach(item => {
      if(id == item.id){
        item.selezionato = true;
      }else{
        item.selezionato = false;
      }
    });

    this.comunicatorService.changeSubject(id);
  }
}

