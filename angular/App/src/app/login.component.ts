
import { Component, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator } from './validator';
import { ReturnObj } from './returnobj';
import { Router } from '@angular/router';


interface Credentials {
    email:string,
    pwd:string
}

@Component({
    selector:'login',
    templateUrl:'login.html',
    styleUrls:['../css/blog-home.css']
})

@Injectable()
export class LoginComponent{
    signinForm = new FormGroup({
        email : new FormControl('1',Validator.check),
        pwd: new FormControl()

    });
    ret:ReturnObj;
    credentials: Credentials;
    constructor(private auth: AuthService, private route:Router) { }

    onLogin(credentials) {
        
        this.ret =  this.auth.login(credentials);
        if(this.ret.code==1){
            this.route.navigateByUrl("home");
        }
        console.log(this.ret);

    }
}