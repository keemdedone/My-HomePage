import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListPageComponent } from './display/game-list-page/game-list-page.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      {
        path:'',
        redirectTo:'game-list',
        pathMatch:'full',
      },
      {
        path:'game-list',
        component: GameListPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
