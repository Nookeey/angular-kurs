import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  /** Pobieramy wszystkie posty usera podajac w parametrze jego userID */
  getPostByUser(userId: number): Observable<Array<Post>> {
    const param = new HttpParams().set('userId', userId + '');
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: param});
  }

  /** Dodajemy nowy post */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
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
