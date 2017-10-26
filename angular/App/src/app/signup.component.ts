import {Component, Injectable} from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {User} from "./user";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {ReturnObj} from "./returnobj";
import {Validator} from "./validator";
import { HttpClient } from '@angular/common/http';


@Component({
    selector:'signup',
    templateUrl:'signup.html',
    styleUrls:['../css/blog-home.css']

})

@Injectable()
export class SignupComponent {

    imagePath = '/assets/img/signup.jpg';

    constructor(
        private userService: UserService,
        private http: HttpClient,
        private router: Router,
        private returnObj:ReturnObj

    ) {};

    signupForm = new FormGroup({

        firstName: new FormControl('', [Validators.required, Validator.checkName]),
        lastName: new FormControl('', [Validators.required, Validator.checkName]),
        email: new FormControl('', [Validators.required, Validator.check]),
        confirmEmail: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validator.checkPassword]),
        confirmPassword: new FormControl()

    });


    register(form) {

        let user = {
            fn: form.value.firstName,
            ln: form.value.lastName,
            email: form.value.email,
            pwd: form.value.password
        }

<<<<<<< HEAD
        this.http.post('http://155.254.33.141:3000/api/users', JSON.stringify(this.user))
=======
        this.http.post('http://155.254.33.141:3000/api/users', user)
>>>>>>> a274fdc5490aaec6fa2a73f22ca5a69c71a165e4
            .subscribe(
                data => {
                    if(data['status'] == 1){
                        this.returnObj.code = 1;
                        this.returnObj.Message = 'Sign up succeed!';
<<<<<<< HEAD
                        console.log(data);
                        // this.router.navigate(['/home']);
=======
                        // this.router.navigate(['/home']);
                        console.log(data);
>>>>>>> a274fdc5490aaec6fa2a73f22ca5a69c71a165e4

                    }else{
                        this.returnObj.code = 0;
                        this.returnObj.Message = 'Please try again';
                    }


                },
                error => {
                    console.log(error);
                });
    }


}