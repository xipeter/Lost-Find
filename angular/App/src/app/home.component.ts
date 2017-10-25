
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ReturnObj } from './returnobj';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
    selector:'home',
    templateUrl:'home.html',
    styleUrls:['../css/blog-home.css'],
    providers:[HomeService]
    
})

export class HomeComponent implements OnInit {
    ngOnInit(): void {
        this.showPost();
    }
    ret:ReturnObj;
    list;
    constructor(private service: HomeService,private http:HttpClient,private router:Router){}
    showPost():void{
        console.log('hellohome');
        this.http.get('http://155.254.33.141:3000/api/users/posts/type/0').subscribe(
            data=>{
                console.log(data);
                this.list = data;
                // console.log(data[0]['posts']['title']);
                
            }
        );

    }
    gotoDetail(id):void{
        // console.log(id);
        this.router.navigate(['/detail',id]);
      }

}