import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './auth/authguard.guard';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard] 
  },
  {
    path: '',
    redirectTo: 'midterm',
    pathMatch: 'full'
  },
  {
    path: 'midterm',
    canActivate: [AuthguardGuard],
    loadChildren: () => import('./midterm/midterm.module').then((m) => m.MidtermModule)
  },
  {
    path: 'input',
    canActivate: [AuthguardGuard],
    loadChildren: () => import('./input/input.module').then((i) => i.InputModule)
  },
  {
    path: 'my-form',
    canActivate: [AuthguardGuard],
    loadChildren: () => import('./my-form/my-form.module').then((f) => f.MyFormModule)
  },
  {
    path: 'star-war',
    canActivate: [AuthguardGuard],
    loadChildren: () => import('./star-war/star-war.module').then((s) => s.StarWarModule)
  },
  {
    path: 'covid',
    canActivate: [AuthguardGuard],
    loadChildren: () => import('./covid/covid.module').then((c) => c.CovidModule)
  },
  {
    path: 'test',
    canActivate: [AuthguardGuard],
    loadChildren: () => import('./test-area/test-area.module').then((t) => t.TestAreaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
