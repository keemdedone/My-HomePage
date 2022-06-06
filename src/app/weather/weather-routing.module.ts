import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPageComponent } from './display/weather-page/weather-page.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path:'',
    component:WeatherComponent,
    children: [
      {
        path:'',
        redirectTo:'weather-report',
        pathMatch:'full',
      },
      {
        path:'weather-report',
        component:WeatherPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
