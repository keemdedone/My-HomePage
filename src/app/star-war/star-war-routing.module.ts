import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarPeopleListPageComponent } from './star-war-list-page/star-war-people-list-page/star-war-people-list-page.component';
import { StarWarPlanetsListPageComponent } from './star-war-list-page/star-war-planets-list-page/star-war-planets-list-page.component';
import { StarWarSpeciesListComponent } from './star-war-list-page/star-war-species-list-page/star-war-species-list.component';
import { StarWarPeopleViewPageComponent } from './star-war-view-page/star-war-people-view-page/star-war-people-view-page.component';
import { StarWarPlanetsViewPageComponent } from './star-war-view-page/star-war-planets-view-page/star-war-planets-view-page.component';
import { StarWarSpeciesViewPageComponent } from './star-war-view-page/star-war-species-view-page/star-war-species-view-page.component';
import { StarWarComponent } from './star-war/star-war.component';

const routes: Routes = [
  {
    path:'',
    component:StarWarComponent,
    children: [
      {
        path:'',
        redirectTo:'people',
        pathMatch:'full',
      },
      {
        path:'people',
        component:StarWarPeopleListPageComponent,
      },
      {
        path:'people/:id',
        component:StarWarPeopleViewPageComponent,
      },
      {
        path:'species',
        component:StarWarSpeciesListComponent,
      },
      {
        path:'species/:id',
        component:StarWarSpeciesViewPageComponent,
      },
      {
        path:'planets',
        component:StarWarPlanetsListPageComponent,
      },
      {
        path:'planets/:id',
        component:StarWarPlanetsViewPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarRoutingModule { }
