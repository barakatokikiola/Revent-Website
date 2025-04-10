import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/@core/services/blogs.service';

@Component({
  selector: 'app-recentblog',
  templateUrl: './recentblog.component.html',
  styleUrls: ['./recentblog.component.scss']
})
export class RecentblogComponent implements OnInit {

  blogs: {img: string,title:string,desc:string}[]=[];
  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.blogs;
  }

}
