import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { AppRouting } from './app.routing.module';
import { LoginComponent } from './login.component';
import { SignupComponent} from "./signup.component";
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent,SignupComponent
  ],
  imports: [



BrowserModule,AppRouting,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }