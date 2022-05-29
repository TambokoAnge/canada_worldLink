import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import{PostsRoutingModule} from './posts-routing.module'
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    SinglePostComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    PostListComponent,
    PostComponent,
    SinglePostComponent,
    NewPostComponent
  ]
})
export class PostsModule { }
