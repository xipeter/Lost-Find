
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap } from '@angular/router';
import "rxjs/add/operator/switchMap";
import { HomeService } from './home.service';
import {Location} from'@angular/common'

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
            console.log(this.detail);
        });

    }
    constructor(private route:ActivatedRoute,private homeService:HomeService,private location:Location){}
    detail;
    goback(){
        this.location.back();
    }

}