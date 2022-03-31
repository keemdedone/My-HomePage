import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarPeopleListPageComponent } from './star-war-list-page/star-war-people-list-page/star-war-people-list-page.component';
import { StarWarPeopleViewPageComponent } from './star-war-view-page/star-war-people-view-page/star-war-people-view-page.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarRoutingModule { }
