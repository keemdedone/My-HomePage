import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAreaZeroOneComponent } from './test-area-zero-one/test-area-zero-one.component';
import { TestAreaComponent } from './test-area/test-area.component';

const routes: Routes = [
  {
    path:'',
    component:TestAreaComponent,
    children: [
      {
        path:'',
        redirectTo:'test-area-01',
        pathMatch:'full',
      },
      {
        path:'test-area-01',
        component:TestAreaZeroOneComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAreaRoutingModule { }
