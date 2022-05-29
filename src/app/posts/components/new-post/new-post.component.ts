import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Post } from 'src/app/core/Models/post.models';
import { PostService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm!: FormGroup;
  postPreview$!: Observable<Post>

  constructor(private formBuilder:FormBuilder,
    private postService:PostService,
    private router:Router,) { }

  ngOnInit(): void {
    this.postForm= this.formBuilder.group({
      title: [null, Validators.required],
      user: [null, Validators.required],
      description: [null, Validators.required],
      contenu: [null, Validators.required],
      contact: [null, Validators.required],
      location: [null]
    },{
      updateOn: 'blur'
    });
    this.postPreview$= this.postForm.valueChanges.pipe(
      map(formValue =>({
        ...formValue,
        createDate: new Date(),
        id: 0
      }) )
    )
  }

  onSubmitForm(): void {
    this.postService.addPost(this.postForm.value).pipe(
      tap(() => this.router.navigateByUrl("/posts"))
    ).subscribe();
  }

}
