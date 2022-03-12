import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input/input.component';
import { InputContainerComponent } from './input-container/input-container.component';

import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputDisplayComponent } from './display/input-display/input-display.component';
import { InputContainerSectionComponent } from './input-container-section/input-container-section.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    InputComponent,
    InputContainerComponent,
    InputDisplayComponent,
    InputContainerSectionComponent,
  ],
  imports: [
    CommonModule,
    InputRoutingModule,
    PortalModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
})
export class InputModule {}
