
import { Component, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator } from './validator';


interface Credentials {
    username:string,
    password:string
}

@Component({
    selector:'login',
    templateUrl:'login.html',
    styleUrls:['../css/blog-home.css']
})

@Injectable()
export class LoginComponent{
    signinForm = new FormGroup({
        username : new FormControl('1',Validator.check),
        password: new FormControl()

    });
    credentials: Credentials;
    constructor(private auth: AuthService) { }

    onLogin(credentials) {
        console.log(credentials);
        this.auth.login(credentials);
    }
}