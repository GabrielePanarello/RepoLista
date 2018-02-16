import { Component, ViewChild } from '@angular/core';
import { MenuItem } from './objs/menuItem';
import { ComunicatorServiceMenu } from './services/comunicator-menu.service';
import { GamesListComponentComponent } from './components/games-list-component/games-list-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentMenu = "01";
  idSelected = "";

@ViewChild(GamesListComponentComponent) viewChild : GamesListComponentComponent;

constructor(private comunicatorService : ComunicatorServiceMenu){
  this.comunicatorService.mySubjects.subscribe ((newValue: string) => {
    this.currentMenu = newValue;
});
}

ngAfterViewChecked(){
  if(this.viewChild && this.viewChild.id && this.idSelected != this.viewChild.id){
    this.idSelected = this.viewChild.id;

    let this_ = this;
    setTimeout(function() {

    this_.comunicatorService.changeSubject("04");

    },0);
  }
}

}

