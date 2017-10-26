
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
            this.detail = data;
            // console.log(this.detail);
            this.http.get('http://155.254.33.141:9000/api/users/posts/'+data['uuid']+'/comments').subscribe(
                data=>{
                    console.log(data);
                    this.comment = data;
                    console.log(this.comment);
                    
                }
            );
        });

    }
    constructor(private route:ActivatedRoute,private homeService:HomeService,private location:Location,private http:HttpClient){}
    detail;
    comment;
    goback(){
        this.location.back();
    }

}