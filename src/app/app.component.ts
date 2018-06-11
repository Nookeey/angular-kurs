import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private httpService: HttpService ) {}

  myPosts;
  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      this.myPosts = posts;
      console.log(posts);
    });
  }

  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      console.log(post);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(5).subscribe(posts => {
      console.log(posts);
    });
  }

  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'Moj post',
      body: 'Pierwszy post o angularze!',
    });

    this.httpService.addPost(p).subscribe(post => {
      console.log(post);
    });
  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'sunt aut facer repellat provident occaecati excepturi optio reprehenderit',
      body: 'nowy wpis',
    });

    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }

  deletePost() {}

  changePost() {
    const post: Post = ({
      id: 1,
      body: 'zmiana tylko wpisu',
    });
  }

}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
