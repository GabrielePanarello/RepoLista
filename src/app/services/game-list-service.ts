import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';

@Injectable()
export class GameListService {

  constructor() { }

  private items:GameItem [] = [
    new GameItem("01","FIFA 18","-","Sport",5,35,2017,"../../../assets/fifa18.jpeg"),
    new GameItem("02","Call Of Duty","-","FPS",5,35,2017,"../../../assets/cod.jpeg"),
    new GameItem("03","Destiny 2","-","FPS",5,30,2017,"../../../assets/destiny.jpg"),
    new GameItem("04","NBA 2K18","-","Sport",5,35,2017,"../../../assets/nba.jpg")
  ];
  
  getGamesList(): GameItem[] {
    return this.items;
}

  getGameById(value:string): GameItem {
    for(let item of this.items){
      if(value == item.id){
        return item;
      }
    }
  }

  getGameByName(value:string): GameItem {
    for(let item of this.items){
      if(item.nome.toLowerCase().match(value.toLowerCase())){
        return item;
      }
    }
  }

  editGame(modifiedGame: GameItem){
    for(let item of this.items){
      if(modifiedGame.id == item.id){
        item = modifiedGame;
      }
    }
  }


}
