
import { Injectable } from '@angular/core';
import { ReturnObj } from './returnobj';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class HomeService{
    constructor(private ret:ReturnObj,private http :HttpClient){}

    getPost(id:number):Promise<any>{
        // return this.getProducts().then(products=>products.find(obj=>obj.id==id));
        const url = `http://155.254.33.141:9000/api/users/posts/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(data=>data)
        .catch(this.handleError);

    }
    private handleError(error:any):Promise<any>{
        console.error('Error:',error); 
        return  Promise.reject(error);
    }

}