import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie/movie.component';
import { PortalModule } from '@angular/cdk/portal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { MoviePopularPageComponent } from './display/movie-popular-page/movie-popular-page.component';


@NgModule({
  declarations: [
    MovieComponent,
    MoviePopularComponent,
    MoviePopularPageComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
  ]
})
export class MovieModule { }
