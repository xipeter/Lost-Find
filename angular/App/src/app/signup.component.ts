import {Component} from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import {User} from "./user";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
    selector:'signup',
    templateUrl:'signup.html',
    styleUrls:['../css/blog-home.css']

})

export class SignupComponent {

    imagePath = '/assets/img/signup.jpg';

    model: any = {};
    loading = false;

    constructor(
        private user: User,
        private router: Router,
        private userService: UserService) { }

    signupForm = new FormGroup({

        firstname: new FormControl(),
        lastname: new FormControl(),
        email: new FormControl(),
        password: new FormControl()

    });


    register(form) {

        this.user.firstName = form.firstName;
        this.user.lastName = form.lastName;
        this.user.email = form.email;
        this.user.password = form.password;

        this.loading = true;
        this.userService.create(this.user)
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }


}