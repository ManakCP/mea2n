import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const router: Routes = [
  { path : '', component: LoginComponent},
  { path : 'login', component: LoginComponent},
  { path : 'signup', component: SignupComponent},
  { path : 'dashboard', component: DashboardComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})

export class MyAppRoute {}
export const routingComponent = [LoginComponent, SignupComponent];
// export const myAppRoute = RouterModule.forRoot(router);
