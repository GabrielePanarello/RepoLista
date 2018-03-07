import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { Router } from '@angular/router';
import { Genere } from '../../objs/genere';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.css']
})
export class GamesListComponent implements OnInit {

  id: string;
  items: GameItem[];
  generi: Genere[];
  value = null;
  show = true;

  constructor(private gameListService: GameListService, private router: Router) { 
  }

  ngOnInit(){
    this.items = this.gameListService.getGamesList();
    this.generi = this.gameListService.getGeneriList();
  }

  selectGame(id:string){
    this.id = id;
    this.router.navigate(["/dettaglio/"+id]);
  }
  

}
