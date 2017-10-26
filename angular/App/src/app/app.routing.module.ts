
import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from'@angular/router'

import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import {SignupComponent} from "./signup.component";
import { DetailCompenent } from './detail.component';
<<<<<<< HEAD
import { AuthGuard } from './auth-guard.service';
=======
import {NewpostComponent} from "./newpost.component";
>>>>>>> e5cfe03ec681c7d5e0a492d11a9974b3169a0692


const route:Routes=[
    {
        path:'home',
        component:HomeComponent,
        canActivate:[AuthGuard]
    },{
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component: SignupComponent
    },{
        path:'detail/:id',
        component:DetailCompenent
    },{
        path:'newpost',
        component:NewpostComponent
    }

]

@NgModule({
    imports:[ RouterModule.forRoot(route) ],



exports:[RouterModule]
})

export class AppRouting{

}