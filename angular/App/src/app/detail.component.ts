
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap } from '@angular/router';
import "rxjs/add/operator/switchMap";
import { HomeService } from './home.service';


@Component({
    selector:'detail',
    templateUrl:'./detail.html'

})

export class DetailCompenent implements OnInit {
    ngOnInit(): void {
        this.route.paramMap.switchMap
        ((para:ParamMap)=>{
            return this.homeService.getPost(+para.get('id'))
        }).subscribe(data=>this.detail = data);
    }
    constructor(private route:ActivatedRoute,private homeService:HomeService){}
    detail;

}