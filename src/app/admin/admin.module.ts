import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminmenuComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
})
export class AdminModule { }
