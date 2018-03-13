import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Genere } from '../../objs/genere';
import { GenreService } from '../../services/genre.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditForm } from '../../objs/formObjs/editForm';
import { ElementsService } from '../../services/elements.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game-component.component.html',
  styleUrls: ['./edit-game-component.component.css']
})
export class EditGameComponent implements OnInit {

  item: GameItem;
  newItem: GameItem;
  generi: Genere[];

  value: string;

  isClicked = false;
  fromDetail = false;
  founds = false;

  elements: EditForm<any>[];

  constructor(private formService: ElementsService, private listService: GameListService, private genresService: GenreService, private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.newItem = this.listService.getGameById(params['id']);
        this.item = this.newItem.clone();
        this.item.genere = this.item.genere.clone();
        this.fromDetail = true;
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.authService.checkItemSign(this.item, this.newItem, this.isClicked);
      }
    });

    this.generi = this.genresService.getGeneriList();

  }

  ngOnInit() {
    if (this.fromDetail == true) {
      this.listService.getGameById(this.newItem.id);
      this.listService.getGameById(this.item.id);
      this.elements = this.formService.setElements(this.newItem.id);
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
        this.item.genere = this.item.genere.clone();
        this.founds = false;
        this.elements = this.formService.setElements(this.newItem.id);
      }
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
