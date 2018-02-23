import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home-component/home.component";
import { GamesListComponentComponent } from "../components/games-list-component/games-list-component.component";
import { GameDetailComponentComponent } from "../components/game-detail-component/game-detail-component.component";
import { EditGameComponentComponent } from "../components/edit-game-component/edit-game-component.component";
import { LoginComponent } from "../components/login/login.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'lista', component: GamesListComponentComponent},
    {path:'dettaglio/:id', component: GameDetailComponentComponent},
    {path:'modifica', component: EditGameComponentComponent},
    {path:'login', component: LoginComponent},
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: '**', component: LoginComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class MainRouterModule{}