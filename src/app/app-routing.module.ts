import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/components/post-list/post-list.component';

const routes: Routes = [
  {path:'posts', loadChildren:()=>import('./posts/posts.module').then(m=>m.PostsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
