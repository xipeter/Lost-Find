import { AuthService } from './auth.service';
import { Component } from '@angular/core';
@Component({
    selector:'logout',
    template: '<button (click)="logout()">Logout</button>'
})
export class LogoutComponent{
    constructor(private authService:AuthService){}
    logout(){
        this.authService.logout();
    }
}