import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    component:DashboradComponent,
    children:[
      {
        path:'',
        redirectTo:'users',
        pathMatch:'full',
      },
      {
        path:'users',
        component: UsersComponent,
      },
      {
        path:'users/create',
        component: UserCreateComponent,
      },
      {
        path:'users/:id',
        component: UsersEditComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
