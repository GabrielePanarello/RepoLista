import { Pipe, PipeTransform } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { GameListService } from '../services/game-list-service';

@Pipe({
  name: 'idToDetail'
})
export class IdToDetailPipe implements PipeTransform {

  constructor(private gameListService: GameListService){}

  transform(id: string, itemId: string): string {
    return this.gameListService.getGameById(itemId).genere.descrizione;
  }

}
