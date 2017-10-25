import {Component} from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from "./user";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {ReturnObj} from "./returnobj";
import {Validator} from "./validator";

@Component({
    selector:'signup',
    templateUrl:'signup.html',
    styleUrls:['../css/blog-home.css']

})

export class SignupComponent {

    imagePath = '/assets/img/signup.jpg';

    model: any = {};
    loading = false;
    ret:ReturnObj;

    constructor(
        private user: User,
        private userService: UserService
    ) { }

    signupForm = new FormGroup({

        firstname: new FormControl('', [Validators.required, Validator.checkName]),
        lastname: new FormControl(),
        email: new FormControl(),
        password: new FormControl()

    });


    register(form) {

        this.user.firstName = form.firstName;
        this.user.lastName = form.lastName;
        this.user.email = form.email;
        this.user.pwd = form.password;

        this.loading = true;

        this.ret = this.userService.create(this.user);
        console.log(this.ret);

    }


}