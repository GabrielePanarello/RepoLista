import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { GamesListComponentComponent } from './components/games-list-component/games-list-component.component';
import { GameDetailComponentComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './components/edit-game-component/edit-game-component.component';
import { HomeComponent } from './components/home-component/home.component';
import { ComunicatorServiceMenu } from './services/comunicator-menu.service';
import { GameListService } from './services/game-list-service';


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
    ComunicatorServiceMenu,
    GameListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
