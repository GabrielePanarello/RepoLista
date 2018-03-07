import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { GamesListComponent } from '../games-list-component/games-list-component.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../objs/user';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponent {

  id: string;
  item: GameItem;
  isAdmin = false;

  constructor(private gameService: GameListService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.item = this.gameService.getGameById(params['id']);
      }
    });
    let userService: UserService = new UserService();
    this.isAdmin = userService.checkIsLogged(sessionStorage.getItem('key'));
  }

  ngOnInit() {
  }

  backToList() {
    this.router.navigate(["/lista"]);
  }

  selectGame(id: string) {
    this.id = id;
    this.router.navigate(["/modifica/" + this.item.id]);
  }


}
