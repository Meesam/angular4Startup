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
     return this.http.get('http://staffline-qa.compunnel.com/api/users/lookupdata')
         .map(res=>res.json());
  }

}
