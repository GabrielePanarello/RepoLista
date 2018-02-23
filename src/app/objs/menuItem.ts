export class MenuItem{
    id: string;
    descrizione: string;
    visualizzato:boolean;

    constructor(id:string = "", descrizione:string = "", visualizzato:boolean = false){
        this.id = id;
        this.descrizione = descrizione;
        this.visualizzato = visualizzato;
    }

}