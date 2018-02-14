import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';

@Injectable()
export class GameListService {

  constructor() { }

  private items:GameItem [] = [
    new GameItem("01","DC","Flash","Serie TV",5,98,70),
    new GameItem("02","DC","Arrow","Serie TV",6,90,80),
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

}
