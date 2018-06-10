import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpService) {}

  myPosts;
  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      this.myPosts = posts;
    });
  }

  getPost() {}

  getPostByUser() {}

  addPost() {
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'Moj post',
      body: 'Pierwszy post o angularze!',
    });
  }

  updatePost() {
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'sunt aut facer repellat provident occaecati excepturi optio reprehenderit',
      body: 'nowy wpis',
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
