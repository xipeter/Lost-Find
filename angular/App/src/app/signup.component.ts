import {Component} from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import {User} from "./user";

@Component({
    selector:'signup',
    templateUrl:'signup.html',
    styleUrls:['../css/blog-home.css']

})

export class SignupComponent {

    imagePath = '/assets/img/signup.jpg';

    signupForm = new FormGroup({

        firstname: new FormControl(),
        lastname: new FormControl(),
        email: new FormControl(),
        password: new FormControl()

    });

    user: User;



}