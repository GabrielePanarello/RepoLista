export class GameItem{
    id: string;
    nome: string;
    descrizione: string;
    genere: string;
    rating: number;
    prezzo: number;
    annoUscita: number
    copertina : string;

    constructor(id:string = "", nome:string = "", descrizione:string = "", genere:string= "", rating:number=0, prezzo:number=0, annoUscita:number = 0, copertina : string){
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.genere = genere;
        this.rating = rating;
        this.prezzo = prezzo;
        this.annoUscita = annoUscita;
        this.copertina = copertina;
    }

    clone(item: GameItem): GameItem{
        return new GameItem(this.id,this.nome,this.descrizione,this.genere,this.rating,this.prezzo,this.annoUscita,this.copertina);
     }
    

}