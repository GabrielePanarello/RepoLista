import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';
import { Genere } from '../objs/genere';

@Injectable()
export class GameListService {

  constructor() { }

  private generi: Genere[] = [
    new Genere("01","Tutti"),
    new Genere("02", "RPG"),
    new Genere("03", "FPS"),
    new Genere("04", "Sport"),
    new Genere("05", "Fantasy"),
    new Genere("06", "Simulazione")
  ];

  private items: GameItem[] = [
    new GameItem("01", "FIFA 18", "-", this.generi[3], 5, 35, 2017, "../../../assets/fifa18.jpeg"),
    new GameItem("02", "Call Of Duty", "-", this.generi[2], 5, 35, 2017, "../../../assets/cod.jpeg"),
    new GameItem("03", "Destiny 2", "-", this.generi[1], 5, 30, 2017, "../../../assets/destiny.jpg"),
    new GameItem("04", "NBA 2K18", "-", this.generi[3], 5, 35, 2017, "../../../assets/nba.jpg")
  ];

  getGamesList(): GameItem[] {
    return this.items;
  }

  getGeneriList(): Genere [] {
    return this.generi;
  }

  getGameById(value: string): GameItem {
    for (let item of this.items) {
      if (value == item.id) {
        return item;
      }
    }
  }

  getGameByName(value: string): GameItem {
    for (let item of this.items) {
      if (item.nome.toLowerCase().match(value.toLowerCase())) {
        return item;
      }
    }
  }

  editGame(modifiedGame: GameItem) {
    for (let item of this.items) {
      if (modifiedGame.id == item.id) {
        item = modifiedGame;
      }
    }
  }


}
