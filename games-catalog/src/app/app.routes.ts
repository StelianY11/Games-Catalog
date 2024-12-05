import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { GamesComponent } from './game-resources/game/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddGameComponent } from './game-resources/add-game/add-game.component';
import { GameDetailsComponent } from './game-resources/games-details/game-details.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    {
        path: 'games', children: [
            { path: "", component: GamesComponent },
            { path: "game-details", component: GameDetailsComponent }
        ]
    },
    { path: "game-details", component: GameDetailsComponent },
    { path: "about", component: AboutComponent },
    { path: "add-game", component: AddGameComponent, /*canActivate: [AuthGuard] */},
    { path: "404", component: PageNotFoundComponent },
    { path: '**', redirectTo: "/404" },
];
