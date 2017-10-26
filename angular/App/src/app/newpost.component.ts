
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/switchMap";
import {User} from "./user";
import {ReturnObj} from "./returnobj";
import {Credentials} from "./login.component";

@Component({
    selector:'newpost',
    templateUrl:'./newpost.html',
    styleUrls:['../css/blog-home.css']

})

export class NewpostComponent {

    // sections = ['Lost', 'Found'];

    sections = [{
        value:'0',
        name:'Lost'
    }, {
        value:'1',
        name:'Found'
    }]

    date = Date.now();

    currentUser = localStorage.getItem('currentUser');

    constructor(
        // private user: User,
        private router:Router,
        private http:HttpClient,
        private returnObj: ReturnObj
    ){}

    newPost(form) {
        // let currentUser = localStorage.getItem('currentUser');

        console.log(typeof this.currentUser);
        let user = JSON.parse(this.currentUser);



        console.log(this.currentUser);

        let newPost = {
            email:user['email'],
            title:form.value.title,
            type: form.value.section,
            key_time: form.value.key_time,
            location: form.value.location,
            desc: form.value.description

        }

        console.log(newPost);
        this.http.post('http://155.254.33.141:9000/api/users/posts', newPost)
            .subscribe(
                data => {
                    if(data['status'] == 1){
                        this.returnObj.code = 1;
                        this.returnObj.Message = 'Submit succeed!';
                        // this.router.navigate(['/home']);
                        console.log(data);

                    }else{
                        this.returnObj.code = 0;
                        this.returnObj.Message = 'Submit failed!';
                    }


                },
                error => {
                    console.log(error);
                });
    }

}