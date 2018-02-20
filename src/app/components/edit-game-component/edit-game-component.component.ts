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

  ngOnInit(){
    this.item = this.detailToEdit.getTempItem();
  }

  showGame(value: string){
    if(value != undefined){
      this.item = this.listService.getGameByName(value);
    }else{
     alert("Inserisci il Valore");
   }   
   }

  updateGame(){
    this.listService.editGame(this.item);
    alert("Modificato");
  }

}
