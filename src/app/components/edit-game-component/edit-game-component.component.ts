import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game-component.component.html',
  styleUrls: ['./edit-game-component.component.css']
})
export class EditGameComponentComponent{

  value: string;
  item: GameItem;

  constructor(private listService: GameListService) { }

  showGame(value: string){
  this.item = this.listService.getGameByName(value);
  console.log(this.value + this.item);
  }
  

}
