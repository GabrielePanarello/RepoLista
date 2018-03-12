import { EditForm } from "./editForm";

export class TextboxForm extends EditForm<string>{
    controlType = 'textbox';
    options: {key: string, value: string}[] = [];
    
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
    }
  
}