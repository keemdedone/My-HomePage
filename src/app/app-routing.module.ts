import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { ButtonComponent } from './button/button.component';
import { UpDownComponent } from './up-down/up-down.component';

const routes: Routes = [
  {
    path:'bmi',
    component:BmiComponent,
  },
  {
    path:'button',
    component:ButtonComponent,
  },
  {
    path:'up-down',
    component:UpDownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
