import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import { UsersComponent } from './users/users.component';
import { PortalModule } from '@angular/cdk/portal';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserCreateComponent } from './user-create/user-create.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DashboradComponent,
    UsersComponent,
    UsersEditComponent,
    UserCreateComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PortalModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
  ]
})
export class DashboardModule { }
