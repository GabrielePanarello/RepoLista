import { EditForm } from "./editForm";

export class SelectForm extends EditForm<string>{
    controlType = "dropdown";
    type: string;

    constructor(options: {} = {}){
        super(options);
        this.type = options['type'] || '';  
    }
}