import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu-component/menu-component.component';
import { GamesListComponent } from './components/games-list-component/games-list-component.component';
import { GameDetailComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponent } from './components/edit-game-component/edit-game-component.component';
import { HomeComponent } from './components/home-component/home.component';
import { GameListService } from './services/game-list-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MainRouterModule } from './routers/router-module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MenuService } from './services/menu-service';
import { LoginService } from './services/login.service';
import { AuthLogin } from './services/auth-login';
import { IdToDetailPipe } from './pipes/id-to-detail.pipe';
import { GameStyleDirective } from './directives/game-style.directive';
import { GenreService } from './services/genre.service';
import { EditFormComponent } from './components/edit-game-component/edit-form/edit-form.component';
import { ElementFormComponent } from './components/edit-game-component/element-form/element-form.component';
import { ElementsService } from './services/elements.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GamesListComponent,
    GameDetailComponent,
    EditGameComponent,
    HomeComponent,
    LoginComponent,
    IdToDetailPipe,
    GameStyleDirective,
    EditFormComponent,
    ElementFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MainRouterModule
  ],
  providers: [
    GameListService,
    AuthService,
    AuthGuardService,
    AuthLogin,
    LoginService,
    GenreService,
    ElementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
