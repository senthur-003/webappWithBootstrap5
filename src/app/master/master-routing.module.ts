import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterComponent } from './master.component';
import { TrailCodeComponent } from './trail-code/trail-code.component';

const routes: Routes = [
  {path:'',component:MasterComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'trail',component:TrailCodeComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
