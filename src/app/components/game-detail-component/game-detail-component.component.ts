import { Component, OnInit, Input} from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { GamesListComponentComponent } from '../games-list-component/games-list-component.component';
import { ComunicatorServiceMenu } from '../../services/comunicator-menu.service';
import { DetailToEditService } from '../../services/detail-to-edit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponentComponent{

  id:string;
  item:GameItem;

  constructor(private gameService: GameListService, private router: Router, private activatedRoute: ActivatedRoute ,private detailToEdit : DetailToEditService) {
    this.activatedRoute.params.subscribe( params => {
      if(params['id'] != null && params['id'] != ""){
        this.item = this.gameService.getGameById(params['id']);
      }
    });
  }

  ngOnInit(){
  }

  backToList(){
    this.router.navigate(["/lista"]);
  }

  selectGame(id:string){
    this.id = id;
    this.detailToEdit.setTempItem(this.item);
    this.router.navigate(["modifica"]);
  }


}
