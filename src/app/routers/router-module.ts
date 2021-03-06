import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../services/auth-guard.service";
import { HomeComponent } from "../components/home-component/home.component";
import { GamesListComponent } from "../components/games-list-component/games-list-component.component";
import { GameDetailComponent } from "../components/game-detail-component/game-detail-component.component";
import { EditGameComponent } from "../components/edit-game-component/edit-game-component.component";
import { LoginComponent } from "../components/login/login.component";
import { NgModule } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { AuthLogin } from "../services/auth-login";


const routes: Routes = [
    {path:'home', component: HomeComponent, canActivate: [AuthGuardService]},
    {path:'lista', component: GamesListComponent,canActivate: [AuthGuardService] },
    {path:'dettaglio/:id', component: GameDetailComponent, canActivate: [AuthGuardService]},
    {path:'modifica', component: EditGameComponent, canActivate: [AuthGuardService], canDeactivate: [AuthGuardService]},
    {path:'modifica/:id', component: EditGameComponent, canActivate: [AuthGuardService], canDeactivate: [AuthGuardService]},
    {path:'login', component: LoginComponent, canActivate: [AuthLogin]},
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