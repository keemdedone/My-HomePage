import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';

const routes: Routes = [
  {
    path:'bmi',
    component:BmiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
