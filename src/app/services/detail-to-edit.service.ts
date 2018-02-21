import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';

@Injectable()
export class DetailToEditService {

  constructor(){}

  private tempItem:GameItem;

  setTempItem(item: GameItem){
    this.tempItem = item;
  }

  getTempItem():GameItem{
      return this.tempItem;
  }

  refreshItem(){
    this.tempItem = undefined;
  }
}
