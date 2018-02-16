import { Component, OnInit, Input} from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { GamesListComponentComponent } from '../games-list-component/games-list-component.component';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponentComponent{

  item:GameItem;
  @Input("idSelected") id:string;

  constructor(private gameService: GameListService) {
  }

  ngOnInit(){
    console.log(this.id);
    this.item = this.gameService.getGameById(this.id);
  }

}
