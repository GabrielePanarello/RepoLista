import { Pipe, PipeTransform } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Pipe({
  name: 'idToDetail'
})
export class IdToDetailPipe implements PipeTransform {

  transform(id: string): string {
    let genresService: GenreService = new GenreService();
    return genresService.getDescById(id);
  }

}
