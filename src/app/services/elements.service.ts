import { Injectable } from '@angular/core';
import { EditForm } from '../objs/formObjs/editForm';
import { SelectForm } from '../objs/formObjs/selectForm';
import { TextboxForm } from '../objs/formObjs/textboxForm';
import { GameListService } from './game-list-service';
import { GenreService } from './genre.service';
import { Genere } from '../objs/genere';
import { GameItem } from '../objs/gameItem';

@Injectable()
export class ElementsService {

  genres: Genere[];
  inputGame: GameItem;
  newGenres: [{}] = [{}];

  constructor(private listService: GameListService, private genresService: GenreService) {
    this.genres = genresService.getGeneriList();
  }

  arrayFilter(id: string) {
    this.newGenres = [{}];
    this.inputGame = this.listService.getGameById(id);

    for (let genre of this.genres) {
      if (genre.id != null && genre.id == this.inputGame.genere.id){
        this.newGenres.push({ key: genre.descrizione, value: genre.descrizione, selected: true });
      }else{
        this.newGenres.push({ key: genre.descrizione, value: genre.descrizione, selected: false });
      }
    }
    this.newGenres.splice(0, 2);
    console.log(this.newGenres);
  }

  setElements(id: string) {
    this.arrayFilter(id);

    let elements: EditForm<any>[] = [

      new TextboxForm({
        key: 'nome',
        label: 'Nome',
        value: this.listService.getGameById(id).nome,
        required: true,
        order: 1
      }),
      new TextboxForm({
        key: 'descrizione',
        label: 'Descrizione',
        value: this.listService.getGameById(id).descrizione,
        required: true,
        order: 2
      }),
      new TextboxForm({
        key: 'rating',
        label: 'Rating',
        value: this.listService.getGameById(id).rating,
        required: true,
        order: 3
      }),
      new TextboxForm({
        key: 'prezzo',
        label: 'Prezzo',
        value: this.listService.getGameById(id).prezzo,
        required: true,
        order: 5
      }),
      new TextboxForm({
        key: 'annoUscita',
        label: 'Anno Uscita',
        value: this.listService.getGameById(id).annoUscita,
        required: true,
        order: 4
      }),
      new SelectForm({
        key: 'generi',
        label: 'Genere',
        options: this.newGenres,
        order: 3
      })
    ];
    return elements.sort((a, b) => a.order - b.order);
  }

}
