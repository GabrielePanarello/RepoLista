import { EditForm } from "./editForm";

export class SelectForm extends EditForm<string>{
    controlType = "dropdown";
    options: {key: string, value: string, selected: false}[] = [];

    constructor(options: {} = {}){
        super(options);
        this.options = options['options'] || '';  
    }
}