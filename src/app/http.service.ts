import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /** Pobieramy wszystkie posty */
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }

  /** Pobieramy jeden post podajac id */
  getPost(id: number) {}

  /** Pobieramy wszystkie posty usera podajac w parametrze jego userID */
  getPostByUser(userId: number) {}

  /** Dodajemy nowy post */
  addPost(post: Post) {
  }

  /** Aktualizujemy/Podmieniamy post */
  updatePost(post: Post) {
  }

  /** Usuwamy post */
  deletePost(id: number) {}

  /** Aktualizujemy pola w post */
  changePost(post: Post) {
  }
}
