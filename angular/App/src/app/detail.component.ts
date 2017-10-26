
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap } from '@angular/router';
import "rxjs/add/operator/switchMap";
import { HomeService } from './home.service';
import {Location} from'@angular/common'
import { HttpClient } from '@angular/common/http';

@Component({
    selector:'detail',
    templateUrl:'./detail.html',
    styleUrls:['../css/blog-home.css']

})

export class DetailCompenent implements OnInit {
    ngOnInit(): void {
        this.route.paramMap.switchMap
        ((para:ParamMap)=>{
            return this.homeService.getPost(para.get('id'));
        }).subscribe(data=>{
            this.detail = data['posts'];
            this.user = data;
            console.log(data);
            this.http.get('http://155.254.33.141:9000/api/users/posts/'+data['posts']['uuid']+'/comments').subscribe(
                data=>{
                    console.log(data);
                    this.comments = data;
                    console.log(this.comments);
                    
                }
            );
        });

    }
    constructor(private route:ActivatedRoute,private homeService:HomeService,private location:Location,private http:HttpClient){}
    detail;
    comments;
    user;
    comment;
    findImg = '/assets/img/found.jpg';
    lostImg = '/assets/img/lost.png';

    currentUser = JSON.parse(localStorage.getItem('currentUser'));

    close() {
        console.log(this.detail);
        this.detail.status = '1';

        this.http.post('http://155.254.33.141:9000/api/users/posts/'+this.user['posts']['uuid'],{status:'1'})
            .subscribe(
                data => {
                    if (data['status'] == '1') {
                        console.log('update succeed')
                    }

                    else {
                        console.log('update failed')
                    }
                }
            )

    }

    goback(){
        this.location.back();
    }

    addComment(){
        console.log(this.comment);

        this.http.post('http://155.254.33.141:9000/api/users/posts/' + this.user['posts']['uuid'] + '/comments',
            {email:this.currentUser['email'], comment:this.comment})
            .subscribe(
                data => {
                    if (data['status'] == '1') {


                        console.log('add comment succeed');
                        window.location.reload();

                    }

                    else {
                        console.log('add comment failed')
                    }
                }
            )

    }

}