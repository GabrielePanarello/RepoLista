import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { GamesListComponentComponent } from './games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './edit-game-component/edit-game-component.component';
import { HomeComponent } from './home-component/home.component';
import { ComunicatorServiceMenu } from './comunicator-menu.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    GamesListComponentComponent,
    GameDetailComponentComponent,
    EditGameComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ComunicatorServiceMenu
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
