import { Pipe, PipeTransform } from '@angular/core';
import { GameListService } from '../services/game-list-service';

@Pipe({
  name: 'idToDetail'
})
export class IdToDetailPipe implements PipeTransform {

  transform(id: string): string {
    let gameService: GameListService = new GameListService();
    return gameService.getGenreById(id);
  }

}
