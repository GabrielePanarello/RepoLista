import { Component, OnInit, Input} from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { GamesListComponentComponent } from '../games-list-component/games-list-component.component';
import { ComunicatorServiceMenu } from '../../services/comunicator-menu.service';
import { DetailToEditService } from '../../services/detail-to-edit.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponentComponent{

  @Input("idSelected") id:string;
  item:GameItem;

  constructor(private gameService: GameListService, private comunicatorMenu : ComunicatorServiceMenu, private detailToEdit : DetailToEditService) {}

  ngOnInit(){
    this.item = this.gameService.getGameById(this.id);
  }

  backToList(){
    this.comunicatorMenu.changeSubject("02");
  }

  selectGame(id:string){
    this.id = id;
    this.detailToEdit.setTempItem(this.item);
    this.comunicatorMenu.changeSubject("03");
  }


}
