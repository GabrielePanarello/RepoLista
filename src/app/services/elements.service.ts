import { Injectable } from '@angular/core';
import { EditForm } from '../objs/formObjs/editForm';
import { SelectForm } from '../objs/formObjs/selectForm';
import { TextboxForm } from '../objs/formObjs/textboxForm';
import { element } from 'protractor';

@Injectable()
export class ElementsService {

  constructor() { }

  getElements() {
    let elements: EditForm<any>[] = [
      
      new TextboxForm({
        key: 'nome',
        label: 'Nome',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxForm({
        key: 'nome',
        label: 'Descrizione',
        value: 'Hero',
        required: true,
        order: 2
      })
      /*new SelectForm({
        key: 'generi',
        label: 'Genere',
        options: [
          { key: 'solid', value: 'Solid' }, { key: 'great', value: 'Great’}, {key: 'good',   value: 'Good’ },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      })*/
    ];
    return elements;
  }

}
