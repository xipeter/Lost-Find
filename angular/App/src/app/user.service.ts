import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from "./user";

@Injectable()
export class UserService {
    constructor(private http: HttpClient, route: Router) { }
    signup(user) {
        this.http.post('http://localhost:3000/signup', user)
            .subscribe(
                data => {
                    if (data[status] == '1') {
                        
                    }


                },
                error => {


                    console.log(error)})
    }

    createUser(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(user);
        return this.http.post('/api/users/', body).map((res: Response) => res.json());
    }
}