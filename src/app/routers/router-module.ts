import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../services/auth-guard.service";
import { HomeComponent } from "../components/home-component/home.component";
import { GamesListComponentComponent } from "../components/games-list-component/games-list-component.component";
import { GameDetailComponentComponent } from "../components/game-detail-component/game-detail-component.component";
import { EditGameComponentComponent } from "../components/edit-game-component/edit-game-component.component";
import { LoginComponent } from "../components/login/login.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {path:'home', component: HomeComponent, canActivate: [AuthGuardService]},
    {path:'lista', component: GamesListComponentComponent,canActivate: [AuthGuardService] },
    {path:'dettaglio/:id', component: GameDetailComponentComponent, canActivate: [AuthGuardService]},
    {path:'modifica', component: EditGameComponentComponent, canActivate: [AuthGuardService]},
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