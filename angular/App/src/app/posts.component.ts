
import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { ReturnObj } from './returnobj';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
    selector:'posts',
    templateUrl:'home.html',
    styleUrls:['../css/blog-home.css'],
    providers:[PostsService]
    
})
@Injectable()
export class PostsComponent implements OnInit {
    ngOnInit(): void {
        this.showPost();
    }
    ret:ReturnObj;
    list;
    findImg = '/assets/img/found.jpg';
    lostImg = '/assets/img/lost.png';
    
    constructor(private service: PostsService,private http:HttpClient,private route:ActivatedRoute, private router: Router,private auth:AuthService){}
	
    showPost():void{
        console.log('hello posts');
        
        this.route.paramMap.switchMap
        ((para:ParamMap)=>{
            return this.service.getPost(para.get('cat'),para.get('val'));
        }).subscribe(data=>{
            this.list = data;
            console.log(this.list);
        });



		
        // this.http.get('http://155.254.33.141:3000/api/users/posts/type/0').subscribe(
        //     data=>{
        //         console.log(data);
        //         this.list = data;
        //         // console.log(data[0]['posts']['title']);
                
        //     }
        // );

    }

    gotoDetail(id):void{
        // console.log(id);
        this.router.navigate(['/detail',id]);
      }

}