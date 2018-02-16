import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { DetailToEditService } from '../../services/detail-to-edit.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game-component.component.html',
  styleUrls: ['./edit-game-component.component.css']
})
export class EditGameComponentComponent implements OnInit{
  
  item: GameItem;
  value: string;

  @Input("gameSelected") id:string;
  

  constructor(private listService: GameListService, private detailToEdit : DetailToEditService) { }

  showGame(value: string){
  this.item = this.listService.getGameByName(value);
  console.log(this.value + this.item);
  }

  ngOnInit(){
    this.item = this.detailToEdit.getTempItem();
  }

  updateGame(){
    this.listService.editGame(this.item);
  }

}
