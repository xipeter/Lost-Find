import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReturnObj } from './returnobj';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient,private returnobj :ReturnObj) { }
    login(credentials)   {
        
        
            
           
            
    }


    loggedIn() {
        //return tokenNotExpired();
        return  localStorage.getItem('token');
    }
    logout() { 
        localStorage.removeItem('token'); 
    }
}