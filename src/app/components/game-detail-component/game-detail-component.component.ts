import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { GamesListComponentComponent } from '../games-list-component/games-list-component.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../objs/user';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail-component.component.html',
  styleUrls: ['./game-detail-component.component.css']
})
export class GameDetailComponentComponent {

  id: string;
  item: GameItem;
  users: User[];
  isAdmin = false;

  constructor(private gameService: GameListService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.item = this.gameService.getGameById(params['id']);
      }
    });
    let userService: UserService = new UserService();
    this.users = userService.getUsersList();
  }

  ngOnInit() {
    if (sessionStorage.getItem('key') != null) {
      for (let user of this.users) {
        if (user.user == sessionStorage.getItem('key') && user.isAdmin == true) {
          this.isAdmin = true;
        }
      }
    }
  }

  backToList() {
    this.router.navigate(["/lista"]);
  }

  selectGame(id: string) {
    this.id = id;
    this.router.navigate(["/modifica/" + this.item.id]);
  }


}
