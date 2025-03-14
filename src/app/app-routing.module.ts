import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('../app/auth/auth.module').then(m=>m.AuthModule)},
  {path:'master',loadChildren:()=>import('../app/master/master.module').then(m=>m.MasterModule)},
  {path:'',component:AuthComponent,loadChildren:()=>import('../app/auth/auth.module').then(m=>m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
