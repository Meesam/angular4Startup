import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(public http:Http) {
    console.log('Blog service connected...');
  }

  getPosts(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
         .map(res=>res.json());
  }

}
