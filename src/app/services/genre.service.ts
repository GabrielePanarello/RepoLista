import { Injectable } from '@angular/core';
import { Genere } from '../objs/genere';

@Injectable()
export class GenreService {

  constructor() { }

  private generi: Genere[] = [
    new Genere(null,"Tutti"),
    new Genere("01", "RPG"),
    new Genere("02", "FPS"),
    new Genere("03", "Sport"),
    new Genere("04", "Fantasy"),
    new Genere("05", "Simulazione")
  ];

  getGeneriList(): Genere [] {
    return this.generi;
  }

  getGenreById(value: string): Genere {
    for (let genre of this.generi) {
      if (value == genre.id) {
        return genre;
      }
    }
  }

  getDescById(value: string): string {
    for (let genre of this.generi) {
      if (value == genre.id) {
        return genre.descrizione;
      }
    }
  }


}
