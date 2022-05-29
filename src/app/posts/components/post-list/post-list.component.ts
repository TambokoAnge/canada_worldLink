import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/Models/post.models';
import { PostService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$= this.postService.getAllPost();
  }

}
