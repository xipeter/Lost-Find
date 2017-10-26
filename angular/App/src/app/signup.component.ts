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

    ret:ReturnObj;

    constructor(
        private user: User,
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

        this.user.fn = form.firstName;
        this.user.ln = form.lastName;
        this.user.email = form.email;
        this.user.pwd = form.password;

        console.log(this.ret);

        this.http.post('http://155.254.33.141:3000/api/users', JSON.stringify(this.user))
            .subscribe(
                data => {
                    if(data['status'] == 1){
                        this.returnObj.code = 1;
                        this.returnObj.Message = 'Sign up succeed!';
                        console.log(data);
                        // this.router.navigate(['/home']);

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