import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { EditForm } from '../../../objs/formObjs/editForm';
import { GameItem } from '../../../objs/gameItem';
import { Genere } from '../../../objs/genere';
import { SelectForm } from '../../../objs/formObjs/selectForm';


@Component({
  selector: 'app-question',
  templateUrl: './element-form.component.html'
})
export class ElementFormComponent implements OnInit {
  
  @Input() element: EditForm<any>;
  @Input() form: FormGroup;

  label: string;
  check: boolean;

  newItem: GameItem = new GameItem("","","",new Genere("",""),0,0,new Date(),"");
  
  get isValid() {
     return this.form.controls[this.element.key].valid; 
    }

  ngOnInit(){
    if(this.element.label != null){
    this.label = this.element.label;
    this.setElements();
    }
  }

  setElements(){

    switch (this.label) {

    case 'Nome':
      this.newItem.nome = this.element.value;
    break;

    case 'Descrizione':
      this.newItem.descrizione = this.element.value;
    break;

    case 'Rating':
      this.newItem.rating = this.element.value;
    break;

    case 'Prezzo':
      this.newItem.prezzo = this.element.value;
    break;

    case 'Anno Uscita':
      this.newItem.annoUscita = this.element.value;
    break;

    case 'Genere':
      /* this.newItem.genere.id;
      if(this.element.controlType == 'dropdown'){
      }*/
    break;
    }
}

}