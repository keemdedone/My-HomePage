import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'midterm',
    pathMatch: 'full'
  },
  {
    path: 'midterm',
    loadChildren: () => import('./midterm/midterm.module').then((m) => m.MidtermModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then((i) => i.InputModule)
  },
  {
    path: 'my-form',
    loadChildren: () => import('./my-form/my-form.module').then((f) => f.MyFormModule)
  },
  {
    path: 'star-war',
    loadChildren: () => import('./star-war/star-war.module').then((s) => s.StarWarModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./covid/covid.module').then((c) => c.CovidModule)
  },
  {
    path: 'test-area',
    loadChildren: () => import('./test-area/test-area.module').then((t) => t.TestAreaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
