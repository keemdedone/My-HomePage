import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormRoutingModule } from './my-form-routing.module';
import { MyFormComponent } from './my-form/my-form.component';
import { MyFormPageComponent } from './my-form-page/my-form-page.component';
import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MyformPageDisplayComponent } from './display/myform-page-display/myform-page-display.component';
import { MyFormInformationComponent } from './my-form-information/my-form-information.component';
import { MyFormInformationDisplayComponent } from './display/my-form-information-display/my-form-information-display.component';

@NgModule({
  declarations: [
    MyFormComponent,
    MyFormPageComponent,
    MyformPageDisplayComponent,
    MyFormInformationComponent,
    MyFormInformationDisplayComponent,
  ],
  imports: [
    CommonModule,
    MyFormRoutingModule,
    PortalModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    TextFieldModule,
  ],
})
export class MyFormModule {}
