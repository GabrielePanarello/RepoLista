import { Genere } from "./genere";

export class GameItem{
    id: string;
    nome: string;
    descrizione: string;
    genere: Genere;
    rating: number;
    prezzo: number;
    annoUscita: Date
    copertina : string;

    constructor(id:string = "", nome:string = "", descrizione:string = "", genere:Genere= null, rating:number=0, prezzo:number=0, annoUscita:Date = null, copertina : string){
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.genere = genere;
        this.rating = rating;
        this.prezzo = prezzo;
        this.annoUscita = annoUscita;
        this.copertina = copertina;
    }

    clone(): GameItem{
        return new GameItem(this.id,this.nome,this.descrizione,this.genere,this.rating,this.prezzo,this.annoUscita,this.copertina);
     }
    

}