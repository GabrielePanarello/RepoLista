import { Component, OnInit } from '@angular/core';
import { GameListService } from '../game-list-service';
import { GameItem } from '../gameItem';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponentComponent implements OnInit {

  item: GameItem;
  value = "01";

  constructor() { 
    let gameService:GameListService = new GameListService();
    this.item = gameService.getGameById(this.value);
  }

  ngOnInit() {
  }

}
