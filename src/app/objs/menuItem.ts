export class MenuItem{
    id: string;
    descrizione: string;
    selezionato: boolean;
    visualizzato:boolean;

    constructor(id:string = "", descrizione:string = "", selezionato:boolean = false, visualizzato:boolean = false){
        this.id = id;
        this.descrizione = descrizione;
        this.selezionato = selezionato;
        this.visualizzato = visualizzato;
    }

}