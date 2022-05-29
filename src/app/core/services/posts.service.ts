import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { Post } from "../Models/post.models";

@Injectable({
  providedIn: 'root'
})
export class PostService{
  constructor(private http : HttpClient){}
  posts: Post[]=[
    {
      id: 1,
    title: 'Recrutement ingénieurs',
    user: 'Tamboko',
    description: 'On veut un ingénieur en Data Science et au moins 2ans expériences',
    contenu:"Il sera responsable de l'analyse de données de la boite et il sera payé 1500$ ",
    contact: "655 254 879",
    location:"Laval",
    createDate: new Date(),
  },
  {
    id: 2,
    title: 'Séminaire',
    user:"Tanankem",
    description: "Séminaire sur l'intélligence artificiel",
    contenu:"Nous allons parler des modèles de prédiction",
    contact:"1001pepi@gmail.com",
    location:"Toronto",
    createDate: new Date(),
  }
  ];

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>('http://localhost:3000/posts')
  }

  addPost(formValue:{title:string, user:string, description:string, contenu: string, contact: string, location?: string}): Observable<Post>{
    return this.getAllPost().pipe(
      map(posts=> [...posts].sort((a:Post, b:Post)=> a.id -b.id)),
      map(sortedPosts => sortedPosts[sortedPosts.length -1]),
      map(previousPost => ({
        ...formValue,
        snaps: 0,
        createDate: new Date(),
        id: previousPost.id +1
      })),
      switchMap(newPost =>this.http.post<Post>('http://localhost:3000/facesnaps', newPost))
    );
  }
}
