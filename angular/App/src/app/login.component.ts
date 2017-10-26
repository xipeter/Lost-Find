
import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator } from './validator';
import { ReturnObj } from './returnobj';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


export interface Credentials {
    email:string,
    pwd:string,
    fullname:string;
}

@Component({
    selector:'login',
    templateUrl:'login.html',
    styleUrls:['../css/blog-home.css']
})

@Injectable()
export class LoginComponent implements OnInit{
    ngOnInit(): void {
        this.returnUrl = this.router.snapshot.queryParams['returnURL'] || '/';
    }

    imagePath = '/assets/img/lostandfound.jpg';
    signinForm = new FormGroup({
        email : new FormControl('1'),
        pwd: new FormControl()

    });
    credentials: Credentials;
    constructor(private auth: AuthService, private route:Router,private http: HttpClient,private returnobj:ReturnObj,private router:ActivatedRoute) { }
    returnUrl:string;
    onLogin(credentials) {
        this.http.post('http://155.254.33.141:3000/api/users/check', credentials)
        .subscribe(
        // data => localStorage.setItem('token', data['token']),
        
        data => {
            if(data['status']==0){
                this.returnobj.code=0;
                this.returnobj.Message = 'Your username or password is invalid,Please try again';
                // console.log("service"+this.returnobj);
            }else{

                this.returnobj.code =1;
                this.auth.login(credentials);
                
                this.route.navigate([this.returnUrl])
            }
            
            
        },
        error =>{ 
            console.log(error);
           
            
        });


    }
}