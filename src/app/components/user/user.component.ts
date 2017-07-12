import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Post} from '../../models/post';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   UserName:string;
   Post:Post[];

  constructor(private blogService:BlogService) {

  }

  ngOnInit() {
    this.UserName="Meesam";
    this.blogService.getPosts().subscribe((post)=>{
       this.Post=post;
    })
  }

}
