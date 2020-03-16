import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { RequestComponent } from './request/request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SupportCasesComponent } from './support-cases/support-cases.component';
import { DbTestComponent } from './db-test/db-test.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    RequestComponent,
    SupportCasesComponent,
    DbTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,HttpClientModule,
    NgbModule
  ],
  providers: [DbTestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
