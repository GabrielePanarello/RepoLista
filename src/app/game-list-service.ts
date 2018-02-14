import { Injectable } from '@angular/core';
import { GameItem } from './gameItem';

@Injectable()
export class GameListService {

  constructor() { }
  
  getGamesList(): GameItem[] {
    let items: GameItem[] = [];
    items.push({ id:"01", nome: "DC", descrizione: "Flash", genere: "animato",rating: 5,annoUscita: 98,prezzo: 70 });
    items.push({ id:"02", nome: "DC", descrizione: "Arrow", genere: "animato",rating: 5,annoUscita: 98,prezzo: 60 });
    return items;
}

}
