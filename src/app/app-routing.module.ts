import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {
    path:'bmi',
    component:BmiComponent,
  },
  {
    path:'button',
    component:ButtonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
