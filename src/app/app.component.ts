import { Component } from '@angular/core';
import { MenuItem } from './menuItem';
import { ComunicatorServiceMenu } from './comunicator-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentMenu = "01";

constructor(private comunicatorService : ComunicatorServiceMenu){
  this.comunicatorService.mySubjects.subscribe ((newValue: string) => {
    this.currentMenu = newValue;
});
}

}

