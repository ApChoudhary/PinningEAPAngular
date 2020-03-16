import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "src/app/landing/landing.component";
import { LoginComponent } from "src/app/login/login.component";
import { SupportCasesComponent } from './support-cases/support-cases.component';
import { DbTestComponent } from './db-test/db-test.component';
import { RequestComponent } from "src/app/request/request.component";


const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'dbschema', component: DbTestComponent},
  { path: 'request', component: RequestComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
