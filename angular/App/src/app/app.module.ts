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
import { ReturnObj } from './returnobj';
import {User} from "./user";
import {UserService} from "./user.service";
import { DetailCompenent } from './detail.component';
import { HomeService } from './home.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent,SignupComponent,DetailCompenent
  ],
  imports: [







BrowserModule,AppRouting,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthService,ReturnObj,User,UserService,HomeService,AuthGuard,
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:AuthInterceptor,
    //   multi:true
    // }
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
