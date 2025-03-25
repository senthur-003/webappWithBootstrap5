import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TrailCodeComponent } from './trail-code/trail-code.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TrailCodeComponent
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
