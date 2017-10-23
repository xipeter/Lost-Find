
import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from'@angular/router'
const route:Routes=[
    {
        path:'/about'
        
    }
]

@NgModule({
    imports:[ RouterModule.forRoot(route) ],
    exports:[RouterModule]
})

export class AppRouting{

}