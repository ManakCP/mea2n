import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { myAppRoute, routingComponent } from './approute.Module';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    myAppRoute
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
