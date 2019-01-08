import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-post-prev',
  templateUrl: './blog-post-prev.component.html',
  styleUrls: ['./blog-post-prev.component.css']
})

export class BlogPostPrevComponent implements OnInit {

  @Input() post;

  constructor(private activateRoute: ActivatedRoute){ }

  ngOnInit() {
  }

}
