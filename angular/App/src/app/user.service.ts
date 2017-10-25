import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from "./user";
import { Router } from '@angular/router';
import {ReturnObj} from "./returnobj";

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private router: Router, private returnObj: ReturnObj) { }

    getAll() {
        return this.http.get('http://155.254.33.141:3000/api/users').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/users/' + _id).map((response: Response) => response.json());
    }

    create(user: User): ReturnObj {
        this.http.post('http://155.254.33.141:3000/api/users', user)
            .subscribe(
                data => {
                    if(data['status'] == 1){
                        this.returnObj.code = 1;
                        this.returnObj.Message = 'Sign up success!';
                        this.router.navigate(['/home']);

                    }else{
                        this.returnObj.code = 1;
                        this.returnObj.Message = 'Please try again';
                    }


                },
                error => {
                    console.log(error);
                });

        return this.returnObj;
    }

    update(user: User) {
        return this.http.put('http://155.254.33.141:3000/api/users' + user.id, user);
    }
}