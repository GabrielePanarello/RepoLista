import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';

@Injectable()
export class GameListService {

  constructor() { }

  private items:GameItem [] = [
    new GameItem("01","FIFA 18","-","Sport",5,2018,35),
    new GameItem("02","Call Of Duty","-","FPS",5,2018,35)
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
      if(value == item.nome){
        return item;
      }
    }
  }

  editGame(modifiedGame: GameItem){
    for(let item of this.items){
      if(modifiedGame.id = item.id){
        item = modifiedGame;
      }
    }
  }


}
