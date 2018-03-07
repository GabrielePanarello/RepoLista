import { Injectable } from '@angular/core';
import { GameItem } from '../objs/gameItem';
import { Genere } from '../objs/genere';
import { GenreService } from './genre.service';

@Injectable()
export class GameListService {

  constructor(private genresService: GenreService) { }

  private items: GameItem[] = [
    new GameItem("01", "FIFA 18", "-", this.genresService.getGenreById("03").clone(), 5, 35, new Date("2017,11,11"), "../../../assets/fifa18.jpeg"),
    new GameItem("02", "Call Of Duty", "-", this.genresService.getGenreById("02").clone(), 5, 35, new Date("2017,12,11"), "../../../assets/cod.jpeg"),
    new GameItem("03", "Destiny 2", "-", this.genresService.getGenreById("01").clone(), 5, 30, new Date("2017,09,11"), "../../../assets/destiny.jpg"),
    new GameItem("04", "NBA 2K18", "-", this.genresService.getGenreById("02").clone(), 5, 35, new Date("2017,08,11"), "../../../assets/nba.jpg")
  ];

  getGamesList(): GameItem[] {
    return this.items;
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
