import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { EditForm } from '../../../objs/formObjs/editForm';


@Component({
  selector: 'app-question',
  templateUrl: './element-form.component.html'
})
export class ElementFormComponent {
  
  @Input() element: EditForm<any>;
  @Input() form: FormGroup;
  
  get isValid() {
     return this.form.controls[this.element.key].valid; 
    }
}