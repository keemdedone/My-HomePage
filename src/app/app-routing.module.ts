import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MidtermModule } from './midterm/midterm.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'midterm',
    pathMatch: 'full'
  },
  {
    path: 'midterm',
    loadChildren: () => import('./midterm/midterm.module').then((m) => m.MidtermModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
