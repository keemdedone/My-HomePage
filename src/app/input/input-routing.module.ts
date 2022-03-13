import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDisplayComponent } from './display/input-display/input-display.component';
import { InputTotalDisplayComponent } from './display/input-total-display/input-total-display.component';
import { InputTotalSectionDisplayComponent } from './display/input-total-section-display/input-total-section-display.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path:'',
    component: InputComponent,
    children:[
      {
        path:'',
        redirectTo:'input',
        pathMatch:'full'
      },
      {
        path:'input',
        component: InputDisplayComponent,
      },
      {
        path:'display',
        component: InputTotalDisplayComponent,
      },
      {
        path:'display/:sectionIndex',
        component: InputTotalSectionDisplayComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputRoutingModule { }
