import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { IsHostGuardGuard } from './is-host-guard.guard';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';
import { MpLobbyComponent } from './pages/mp-lobby/mp-lobby.component';
import { RouteNames } from './pages/routes';

const routes: Routes = [
  { path: RouteNames.HOME, component: HomeComponent },
  { path: RouteNames.MP_LOBBY, component: MpLobbyComponent, canActivate: [IsHostGuardGuard] },
  { path: RouteNames.PLAY, component: ChessBoardComponent },
  { path: RouteNames.JOIN + '/:id', component: JoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
