import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/Models/post.models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewPost(){
    this.router.navigateByUrl(`posts/${this.post.id}`);
  }
}
