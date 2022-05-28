import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePopularPageComponent } from './display/movie-popular-page/movie-popular-page.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      {
        path:'',
        redirectTo:'movie-popelar',
        pathMatch:'full',
      },
      {
        path:'movie-popelar',
        component: MoviePopularPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
