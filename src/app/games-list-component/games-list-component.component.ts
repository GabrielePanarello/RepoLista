import { Component, OnInit, ViewChild } from '@angular/core';
import { GameItem } from '../gameItem';
import { GameListService } from '../game-list-service';
import { ComunicatorServiceMenu } from '../comunicator-menu.service';
//import { GameDetailComponentComponent } from '../game-detail-component/game-detail-component.component';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.css']
})
export class GamesListComponentComponent implements OnInit {

  items: GameItem[];
  gameId : string;

  constructor() { 
    let gameListService:GameListService= new GameListService();
    this.items = gameListService.getGamesList();
  }

  ngOnInit(){
    this.items.push(new GameItem()); 
  }

  getGameId(value:string){
    this.gameId = value;
    alert(this.gameId );
  }

  /*ngAfterViewChecked(){
    this.viewChild.value = this.items[0].id;
  }*/

}
