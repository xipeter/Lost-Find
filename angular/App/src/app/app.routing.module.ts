
import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from'@angular/router'

import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import {SignupComponent} from "./signup.component";
import { DetailCompenent } from './detail.component';


const route:Routes=[
    {
        path:'home',
        component:HomeComponent
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
    }
]

@NgModule({
    imports:[ RouterModule.forRoot(route) ],



exports:[RouterModule]
})

export class AppRouting{

}