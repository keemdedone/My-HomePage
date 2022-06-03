import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAreaRoutingModule } from './test-area-routing.module';
import { TestAreaComponent } from './test-area/test-area.component';
import { PortalModule } from '@angular/cdk/portal';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TestAreaZeroOneComponent } from './test-area-zero-one/test-area-zero-one.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    TestAreaComponent,
    TestAreaZeroOneComponent
  ],
  imports: [
    CommonModule,
    TestAreaRoutingModule,
    PortalModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
  ]
})
export class TestAreaModule { }
