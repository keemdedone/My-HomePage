import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarRoutingModule } from './star-war-routing.module';
import { StarWarComponent } from './star-war/star-war.component';
import { StarWarPeopleComponent } from './star-war-list/star-war-people/star-war-people.component';
import { StarWarPeopleListPageComponent } from './star-war-list-page/star-war-people-list-page/star-war-people-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { PortalModule } from '@angular/cdk/portal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StarWarPeopleViewPageComponent } from './star-war-view-page/star-war-people-view-page/star-war-people-view-page.component';
import { StarWarPersonComponent } from './star-war-view/star-war-person/star-war-person.component';

@NgModule({
  declarations: [
    StarWarComponent,
    StarWarPeopleComponent,
    StarWarPeopleListPageComponent,
    StarWarPersonComponent,
    StarWarPeopleViewPageComponent,
  ],
  imports: [
    CommonModule,
    StarWarRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class StarWarModule {}
