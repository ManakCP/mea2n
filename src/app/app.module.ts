import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Route
import { MyAppRoute, routingComponent } from './app.route.Module';
// Services
import { AuthService } from './auth.service';
// Components
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
    HttpModule,
    MyAppRoute
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
