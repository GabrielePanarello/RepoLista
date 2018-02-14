import { Component, OnInit,Input} from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponentComponent{

  item:GameItem;
  id:string;
  @Input('master') masterName: string;

  constructor() {
    let gameService:GameListService = new GameListService();
    this.item = gameService.getGameById(this.id);
  }

 
}
