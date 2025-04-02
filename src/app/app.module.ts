import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MasterComponent } from './master/master.component';
import { AuthRoutingModule } from '../app/auth/auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterbottomComponent } from './footerbottom/footerbottom.component';
import { HeadertopComponent } from './headertop/headertop.component'; 
import { AdminComponent } from './admin/admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MasterComponent,
    FooterbottomComponent,
    HeadertopComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    HttpClientModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
