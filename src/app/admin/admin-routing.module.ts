import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { userRoleGuard } from '../user-role.guard';


const routes: Routes = [
  {path:'',component:AdminComponent,children:[
    {path:'dashboard',component:DashboardComponent,canActivate:[userRoleGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
