import {Component, Injectable} from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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

@Injectable()
export class SignupComponent {

    imagePath = '/assets/img/signup.jpg';

    model: any = {};
    loading = false;
    ret:ReturnObj;

    constructor(
        private user: User,
        private userService: UserService

    ) {};

    signupForm = new FormGroup({

        firstName: new FormControl('', [Validators.required, Validator.checkName]),
        lastName: new FormControl('', [Validators.required, Validator.checkName]),
        email: new FormControl('', [Validators.required, Validator.check]),
        confirmEmail: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validator.checkPassword]),
        confirmPassword: new FormControl()

    });

    // constructor(
    //     fb: FormBuilder,
    //     private user: User,
    //     private userService: UserService
    //
    // ) {
    //     this.signupForm = fb.group({
    //         // define your control in you form
    //         email: [''],
    //         confirmEmail: ['']
    //     })
    // };


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