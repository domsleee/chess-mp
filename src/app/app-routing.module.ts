import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { IsConnectedGuard } from './is-connected.guard';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';
import { MpLobbyComponent } from './pages/mp-lobby/mp-lobby.component';
import { RouteNames } from './pages/routes';
import { PreventDeactivateGuard } from './prevent-deactivate.guard';

const routes: Routes = [
  { path: RouteNames.HOME, component: HomeComponent },
  { path: RouteNames.MP_LOBBY, component: MpLobbyComponent, canActivate: [IsConnectedGuard] },
  { path: RouteNames.PLAY, component: ChessBoardComponent, canDeactivate: [PreventDeactivateGuard] },
  { path: RouteNames.JOIN + '/:id', component: JoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
