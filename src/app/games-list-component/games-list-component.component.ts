import { Component, OnInit } from '@angular/core';
import { GameItem } from '../gameItem';
import { GameListService } from '../game-list-service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.css']
})
export class GamesListComponentComponent implements OnInit {

  items: GameItem[];

  constructor() { 
    let gameListService:GameListService= new GameListService();
    this.items = gameListService.getGamesList();
  }

  ngOnInit(){
    this.items.push(new GameItem()); 
  }

}
