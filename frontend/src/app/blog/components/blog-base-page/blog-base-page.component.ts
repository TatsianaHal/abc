import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services';

@Component({
  selector: 'app-blog-base-page',
  templateUrl: './blog-base-page.component.html',
  styleUrls: ['./blog-base-page.component.css']
})
export class BlogBasePageComponent implements OnInit {

  private post = null;

  selectedPost() {}

  constructor(private blogService: BlogService) { }

  // getPosts():void {
  //   this.blogService.getPosts().then(post => this.post = post)
  // }

  ngOnInit() {
  }

}
