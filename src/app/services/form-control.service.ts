import { Injectable } from '@angular/core';
import { EditForm } from '../objs/formObjs/editForm';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class FormControlService {

  constructor() { }

  toFormGroup(elements: EditForm<any>[]){
    let group: any = {};

    elements.forEach(question => {
      group[question.key] = new FormControl(question.value || '');

    });
    return new FormGroup(group);
  }
}
