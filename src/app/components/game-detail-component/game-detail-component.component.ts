import { Component, OnInit} from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { GamesListComponentComponent } from '../games-list-component/games-list-component.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponentComponent{

  id:string;
  item:GameItem;

  constructor(private gameService: GameListService, private router: Router, private activatedRoute: ActivatedRoute) {
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
    this.router.navigate(["/modifica/"+this.item.id]);
  }


}
