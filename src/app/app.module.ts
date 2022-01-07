import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiComponent } from './bmi/bmi.component';
import { ButtonComponent } from './button/button.component';
import { UpDownComponent } from './up-down/up-down.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiComponent,
    ButtonComponent,
    UpDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
