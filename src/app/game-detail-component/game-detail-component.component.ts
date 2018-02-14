import { Component, OnInit} from '@angular/core';
import { GameListService } from '../game-list-service';
import { GameItem } from '../gameItem';
import { GamesListComponentComponent } from '../games-list-component/games-list-component.component';
import { ComunicatorServiceMenu } from '../comunicator-menu.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponentComponent {

  item: GameItem;
  id: string;
  
  constructor() { 
    let gameService:GameListService = new GameListService();
    this.item = gameService.getGameById(this.id);
  }

}
