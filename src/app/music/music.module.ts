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
import { ReactiveFormsModule } from '@angular/forms';
import { MusicDropComponent } from './music-drop/music-drop.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    MusicComponent,
    MusicPlayComponent,
    MusicAddComponent,
    MusicDropComponent,
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    PortalModule,
    ReactiveFormsModule,
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
    MatTooltipModule,
  ]
})
export class MusicModule { }
