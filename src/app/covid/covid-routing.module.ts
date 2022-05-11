import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidTotalPageComponent } from './covid-total-page/covid-total-page.component';
import { CovidComponent } from './covid/covid.component';

const routes: Routes = [
  {
    path:'',
    component: CovidComponent,
    children: [
      {
        path:'',
        redirectTo:'total',
        pathMatch:'full'
      },
      {
        path:'total',
        component: CovidTotalPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
