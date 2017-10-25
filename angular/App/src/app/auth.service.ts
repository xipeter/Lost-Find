import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReturnObj } from './returnobj';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient,private returnobj :ReturnObj) { }
    login(credentials) :ReturnObj {
        this.http.post('http://155.254.33.141:3000/api/users/check', credentials)
            .subscribe(
            // data => localStorage.setItem('token', data['token']),
            
            data => {
                if(data['status']==0){
                    this.returnobj.code=0;
                    this.returnobj.Message = 'Your username or password is invalid,Please try again';
                    // console.log("service"+this.returnobj);
                }else{
                    
                }
                
            },
            error =>{ 
                console.log(error);
                
                
            });
            return this.returnobj;
    }


    loggedIn() {
        //return tokenNotExpired();
        return  localStorage.getItem('token');
    }
    logout() { 
        localStorage.removeItem('token'); 
    }
}