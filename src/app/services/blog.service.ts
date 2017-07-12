import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '../common/HttpClient';

@Injectable()
export class BlogService {

  constructor(private http:HttpClient) {
    console.log('Blog service connected...');
  }

  getPosts(){
     return this.http.post('http://10.1.9.7:3000/api/accounts/signin',{userName:'apeksha.agrawal@compunnel.in',password:'Abcd@123'})
         .map(res=>res.json());
  }

}
