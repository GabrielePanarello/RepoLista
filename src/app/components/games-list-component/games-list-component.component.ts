import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.css']
})
export class GamesListComponentComponent implements OnInit {

  id: string;
  items: GameItem[];

  constructor(private gameListService: GameListService, private router: Router) { 
  }

  ngOnInit(){
    this.items = this.gameListService.getGamesList();
  }

  selectGame(id:string){
    this.id = id;
    this.router.navigate(["/dettaglio/"+id]);
  }
  

}
