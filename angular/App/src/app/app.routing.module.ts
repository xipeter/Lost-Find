
import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from'@angular/router'

import { HomeComponent } from './home.component';


const route:Routes=[
    {
        path:'/home',
        component:HomeComponent
    },{
        path:'/',
        redirectTo:'/home',
        pathMatch:'full'
    }
]

@NgModule({
    imports:[ RouterModule.forRoot(route) ],

exports:[RouterModule]
})

export class AppRouting{

}