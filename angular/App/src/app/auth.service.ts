import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReturnObj } from './returnobj';
import { Credentials } from './login.component';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient,private returnobj :ReturnObj) { }
    login(credentials:Credentials)   {
        
        localStorage.setItem('currentUser', JSON.stringify(credentials));
            
           
            
    }


    loggedIn() {
        //return tokenNotExpired();
        return  localStorage.getItem('currentUser');
    }
    logout() { 
        localStorage.removeItem('currentUser'); 
    }
}