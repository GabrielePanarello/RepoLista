export class MenuItem{
    id: string;
    descrizione: string;
    selezionato: boolean;

    constructor(id:string = "", descrizione:string = "", selezionato:boolean = false){
        this.id = id;
        this.descrizione = descrizione;
        this.selezionato = selezionato;
    }

}