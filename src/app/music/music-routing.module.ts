import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicPlayComponent } from './music-play/music-play.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    children:[
      {
        path:'',
        redirectTo:'music-play',
        pathMatch: 'full',
      },
      {
        path:'music-play',
        component: MusicPlayComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
