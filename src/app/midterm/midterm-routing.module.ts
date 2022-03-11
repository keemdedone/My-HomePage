import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './midterm-bmi/bmi.component';
import { ButtonComponent } from './midterm-button/button.component';
import { UpDownComponent } from './midterm-up-down/up-down.component';
import { MidtermComponent } from './midterm/midterm.component';

const routes: Routes = [
  {
    path:'',
    component: MidtermComponent,
    children: [
      {
        path:'bmi',
        component: BmiComponent,
      },
      {
        path:'button',
        component: ButtonComponent,
      },
      {
        path:'up-down',
        component: UpDownComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MidtermRoutingModule { }
