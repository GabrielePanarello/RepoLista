export class Genere{
    id: string;
    descrizione: string;

    constructor(id: string, descrizione: string){
        this.id = id;
        this.descrizione = descrizione;
    }

    clone(): Genere{
        return new Genere(this.id,this.descrizione);
     }
}