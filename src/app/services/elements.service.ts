import { Injectable } from '@angular/core';
import { EditForm } from '../objs/formObjs/editForm';
import { SelectForm } from '../objs/formObjs/selectForm';
import { TextboxForm } from '../objs/formObjs/textboxForm';
import { GameListService } from './game-list-service';
import { GenreService } from './genre.service';
import { Genere } from '../objs/genere';

@Injectable()
export class ElementsService {

  constructor(private listService: GameListService, private genresService: GenreService) {}

  setElements(id: string){
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
      /*new SelectForm({
        key: 'generi',
        label: 'Genere',
        options: [],
        order: 3
      })*/
    ];

    return elements.sort((a, b) => a.order - b.order);
  }

}
