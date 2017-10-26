
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/switchMap";
import {User} from "./user";
import {ReturnObj} from "./returnobj";

@Component({
    selector:'newpost',
    templateUrl:'./newpost.html',
    styleUrls:['../css/blog-home.css']

})

export class NewpostComponent implements OnInit {

    sections = ['lost', 'found'];



    ngOnInit(): void {


    }
    constructor(
        private user: User,
        private router:Router,
        private http:HttpClient,
        private returnObj: ReturnObj
    ){}

    detail;

    // get current user???

    newPost(form) {

        let newPost = {
            email:this.user.email,
            title:form.value.title,
            type: form.value.section,
            key_time: form.value.key_time,
            location: form.value.location,
            desc: form.value.desc

        }
        this.http.post('http://155.254.33.141:9000/api/users/posts', newPost)
            .subscribe(
                data => {
                    if(data['status'] == 1){
                        this.returnObj.code = 1;
                        this.returnObj.Message = 'Submit succeed!';
                        this.router.navigate(['/home']);

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