import { Component, OnInit, Input } from '@angular/core';
import { FormControlService } from '../../../services/form-control.service';
import { EditForm } from '../../../objs/formObjs/editForm';
import { FormGroup } from '@angular/forms';
import { GameListService } from '../../../services/game-list-service';
import { GameItem } from '../../../objs/gameItem';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  providers: [FormControlService]
})
export class EditFormComponent implements OnInit {

  @Input() elements: EditForm<any>[] = [];
  form: FormGroup;

  constructor(private formService: FormControlService, private listService: GameListService) { }

  ngOnInit() {
    this.form = this.formService.toFormGroup(this.elements); 
  }


}