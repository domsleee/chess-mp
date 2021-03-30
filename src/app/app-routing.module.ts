import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreventDeactivateGuard } from './guards/prevent-deactivate.guard';
import { IsConnectedGuard } from './guards/is-connected.guard';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';
import { MpLobbyComponent } from './pages/mp-lobby/mp-lobby.component';
import { RouteNames } from './pages/routes';
import { ChessBoardContainerComponent } from './components/chess-board-container/chess-board-container.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: RouteNames.HOME, component: HomeComponent },
  { path: RouteNames.MP_LOBBY, component: MpLobbyComponent, canActivate: [IsConnectedGuard] },
  { path: RouteNames.PLAY, component: ChessBoardContainerComponent, canDeactivate: [PreventDeactivateGuard] },
  { path: RouteNames.JOIN + '/:id', component: JoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
