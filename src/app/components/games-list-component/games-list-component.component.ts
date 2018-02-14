import { Component, OnInit} from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { ComunicatorServiceMenu } from '../../services/comunicator-menu.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.css']
})
export class GamesListComponentComponent implements OnInit {

  items: GameItem[];
  id: string;
  master = 'Master';
  
  constructor(private comunicatoMenu: ComunicatorServiceMenu) { 
    let gameListService:GameListService= new GameListService();
    this.items = gameListService.getGamesList();
  }

  ngOnInit(){
    this.items.push(new GameItem()); 
  }

  getGameId(id:string){
    this.id = id;
    this.comunicatoMenu.changeSubject("03");
  }



}
