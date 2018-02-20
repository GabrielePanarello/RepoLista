import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list-component.component.html',
  styleUrls: ['./games-list-component.component.css']
})
export class GamesListComponentComponent implements OnInit {

  id: string;

  @Input()
  items: GameItem[];

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor(private gameListService: GameListService) { 
  }

  ngOnInit(){
    this.items = this.gameListService.getGamesList();
  }

  selectGame(id:string){
    this.id = id;
    this.change.emit(id);
  }
  

}
