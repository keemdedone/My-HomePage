import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule } from '@angular/forms';

import { MidtermRoutingModule } from './midterm-routing.module';
import { MidtermComponent } from './midterm/midterm.component';
import { BmiComponent } from './midterm-bmi/bmi.component';
import { ButtonComponent } from './midterm-button/button.component';
import { UpDownComponent } from './midterm-up-down/up-down.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MidtermComponent,
    BmiComponent,
    ButtonComponent,
    UpDownComponent,
  ],
  imports: [
    CommonModule,
    MidtermRoutingModule,
    PortalModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ]
})
export class MidtermModule { }
