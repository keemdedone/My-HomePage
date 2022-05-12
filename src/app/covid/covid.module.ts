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
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';

import { CovidTotalComponent } from './covid-total/covid-total.component';
import { CovidTotalPageComponent } from './covid-total-page/covid-total-page.component';
import { CovidDayComponent } from './covid-day/covid-day.component';
import { CovidDayPageComponent } from './covid-day-page/covid-day-page.component';
import { CovidLineChartComponent } from './covid-line-chart/covid-line-chart.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CovidComponent,
    CovidTotalComponent,
    CovidTotalPageComponent,
    CovidDayComponent,
    CovidDayPageComponent,
    CovidLineChartComponent,
  ],
  imports: [
    CommonModule,
    CovidRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPseudoCheckboxModule,
    MatButtonModule,
    MatNativeDateModule,
    NgApexchartsModule,
    NgbAlertModule,
    NgbModule,
  ]
})
export class CovidModule { }
