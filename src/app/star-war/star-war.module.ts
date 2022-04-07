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
import { StarWarSpeciesComponent } from './star-war-list/star-war-species/star-war-species.component';
import { StarWarSpeciesListComponent } from './star-war-list-page/star-war-species-list-page/star-war-species-list.component';
import { StarWarEachSpeciesComponent } from './star-war-view/star-war-each-species/star-war-each-species.component';
import { StarWarSpeciesViewPageComponent } from './star-war-view-page/star-war-species-view-page/star-war-species-view-page.component';
import { StarWarPlanetsComponent } from './star-war-list/star-war-planets/star-war-planets.component';
import { StarWarPlanetsListPageComponent } from './star-war-list-page/star-war-planets-list-page/star-war-planets-list-page.component';
import { StarWarPlanetComponent } from './star-war-view/star-war-planet/star-war-planet.component';
import { StarWarPlanetsViewPageComponent } from './star-war-view-page/star-war-planets-view-page/star-war-planets-view-page.component';

@NgModule({
  declarations: [
    StarWarComponent,
    StarWarPeopleComponent,
    StarWarPeopleListPageComponent,
    StarWarPersonComponent,
    StarWarPeopleViewPageComponent,
    StarWarSpeciesComponent,
    StarWarSpeciesListComponent,
    StarWarEachSpeciesComponent,
    StarWarSpeciesViewPageComponent,
    StarWarPlanetsComponent,
    StarWarPlanetsListPageComponent,
    StarWarPlanetComponent,
    StarWarPlanetsViewPageComponent,
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
