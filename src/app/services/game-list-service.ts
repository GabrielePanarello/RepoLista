import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';
import { Genere } from '../objs/genere';

@Injectable()
export class GameListService {

  constructor() { }

  private generi: Genere[] = [
    new Genere(null,"Tutti"),
    new Genere("01", "RPG"),
    new Genere("02", "FPS"),
    new Genere("03", "Sport"),
    new Genere("04", "Fantasy"),
    new Genere("05", "Simulazione")
  ];

  private items: GameItem[] = [
    new GameItem("01", "FIFA 18", "-", this.generi[3].clone(), 5, 35, new Date("2017,11,11"), "../../../assets/fifa18.jpeg"),
    new GameItem("02", "Call Of Duty", "-", this.generi[2].clone(), 5, 35, new Date("2017,12,11"), "../../../assets/cod.jpeg"),
    new GameItem("03", "Destiny 2", "-", this.generi[1].clone(), 5, 30, new Date("2017,09,11"), "../../../assets/destiny.jpg"),
    new GameItem("04", "NBA 2K18", "-", this.generi[3].clone(), 5, 35, new Date("2017,08,11"), "../../../assets/nba.jpg")
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

  getGenreById(value: string): string {
    for (let genre of this.generi) {
      if (value == genre.id) {
        return genre.descrizione;
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
