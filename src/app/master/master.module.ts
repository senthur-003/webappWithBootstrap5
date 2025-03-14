import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    NgxSliderModule

  ],
  providers: [],
  bootstrap: [DashboardComponent],
})
export class MasterModule { }
