import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from "./user";
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    createUser(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(user);
        return this.http.post('/api/users/', body).map((res: Response) => res.json());
    }




    getAll() {
        return this.http.get('/users').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/users/' + _id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/users/register', user);
    }

    update(user: User) {
        return this.http.put('/users/' + user._id, user);
    }
}