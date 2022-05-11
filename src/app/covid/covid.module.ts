import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidComponent } from './covid/covid.component';

import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CovidTotalComponent } from './covid-total/covid-total.component';
import { CovidTotalPageComponent } from './covid-total-page/covid-total-page.component';


@NgModule({
  declarations: [
    CovidComponent,
    CovidTotalComponent,
    CovidTotalPageComponent
  ],
  imports: [
    CommonModule,
    CovidRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class CovidModule { }
