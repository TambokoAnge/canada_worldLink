import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/Models/post.models';
import { PostService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }
  post$!: Observable<Post>;

  ngOnInit(): void {
    const postId= +this.route.snapshot.params['id'];
    this.post$= this.postService.getPostById(postId);
  }

}
