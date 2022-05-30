import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListPageComponent } from './display/movie-list-page/movie-list-page.component';
import { MoviePopularPageComponent } from './display/movie-popular-page/movie-popular-page.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      {
        path:'',
        redirectTo:'movie-popular',
        pathMatch:'full',
      },
      {
        path:'movie-popular',
        component: MoviePopularPageComponent,
      },
      {
        path:'movie-list',
        component: MovieListPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
