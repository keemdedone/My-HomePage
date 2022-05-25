import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music/music.component';
import { PortalModule } from '@angular/cdk/portal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MusicPlayComponent } from './music-play/music-play.component'
import { MatSliderModule } from '@angular/material/slider';
import { MusicAddComponent } from './music-add/music-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    MusicComponent,
    MusicPlayComponent,
    MusicAddComponent,
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    PortalModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class MusicModule { }
