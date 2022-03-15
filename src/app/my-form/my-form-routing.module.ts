import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyformPageDisplayComponent } from './display/myform-page-display/myform-page-display.component';
import { MyFormPageComponent } from './my-form-page/my-form-page.component';
import { MyFormComponent } from './my-form/my-form.component';

const routes: Routes = [
  {
    path:'',
    component:MyFormComponent,
    children: [
      {
        path:'',
        redirectTo:'form',
        pathMatch:'full',
      },
      {
        path:'form',
        component: MyformPageDisplayComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormRoutingModule { }
