import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game-component.component.html',
  styleUrls: ['./edit-game-component.component.css']
})
export class EditGameComponentComponent implements OnInit {

  item: GameItem;
  newItem: GameItem;

  value: string;

  isClicked = false;
  fromDetail = false;
  founds = false;

  constructor(private listService: GameListService, private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.newItem = this.listService.getGameById(params['id']);
        this.item = this.newItem.clone();
        this.fromDetail = true;
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.authService.checkItemSign(this.item, this.newItem, this.isClicked);
      }
    });
  }

  ngOnInit() {
    if (this.fromDetail == true) {
      this.listService.getGameById(this.newItem.id);
      this.listService.getGameById(this.item.id);
    }

  }

  ngOnDestroy() {
    this.item = undefined;
  }

  showGame(value: string) {
    if (value != undefined) {
      if (this.listService.getGameByName(value) == null) {
        this.founds = true;
        this.newItem = undefined;
      } else {
        this.newItem = this.listService.getGameByName(value);
        this.item = this.newItem.clone();
        this.founds = false;
      }
      console.log(this.founds);
    } else {
      alert("Inserisci il Valore");
    }
  }

  updateGame() {
    this.listService.editGame(this.newItem);
    this.isClicked = true;
    alert("Modificato");
  }
}
