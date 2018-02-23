import { Component, ViewChild } from '@angular/core';
import { MenuItem } from './objs/menuItem';
import { ComunicatorServiceMenu } from './services/comunicator-menu.service';
import { GamesListComponentComponent } from './components/games-list-component/games-list-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  idSelected = "";
  gameSelected = "";

constructor(){
 
}

currentGame(item: string){
  this.idSelected = item;
}


}

