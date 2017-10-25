import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }
    login(credentials) {
        this.http.post('http://155.254.33.141:3000/api/users/check', credentials)
            .subscribe(
            // data => localStorage.setItem('token', data['token']),
            data => console.log(data),
            error => console.log(error));
    }
    loggedIn() {
        //return tokenNotExpired();
        return  localStorage.getItem('token');
    }
    logout() { 
        localStorage.removeItem('token'); 
    }
}