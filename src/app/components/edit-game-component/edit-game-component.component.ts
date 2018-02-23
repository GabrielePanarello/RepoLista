import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../../objs/gameItem';
import { GameListService } from '../../services/game-list-service';
import { DetailToEditService } from '../../services/detail-to-edit.service';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game-component.component.html',
  styleUrls: ['./edit-game-component.component.css']
})
export class EditGameComponentComponent implements OnInit{
  
  item: GameItem;
  itemTmp : GameItem; 
  value: string;

  constructor(private listService: GameListService, private detailToEdit : DetailToEditService, private router: Router, private authService: AuthService) { 
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.authService.checkItemSign(this.item,this.itemTmp);
      }
        
  });
}

  ngOnInit(){
    this.item = this.detailToEdit.getTempItem();
  }

  ngOnDestroy(){
    this.detailToEdit.refreshItem();
  }

  
  showGame(value: string){
    if(value != undefined){
      this.item = this.listService.getGameByName(value);
      // this.itemTmp = this.clone(this.listService.getGameByName(value));
    }else{
     alert("Inserisci il Valore");
   }   
   }

  updateGame(){
    this.listService.editGame(this.item);
    alert("Modificato");
  }

}
