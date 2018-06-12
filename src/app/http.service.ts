import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private postsObs = new BehaviorSubject<Array<Post>>([]);
  posts$ = this.postsObs.asObservable();

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  /** Pobieramy wszystkie posty */
  getPosts() {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.postsObs.next(posts);
      }, err => {
        console.log(err);
      });
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
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  /** Usuwamy post */
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  /** Aktualizujemy pola w post */
  changePost(post: Post): Observable<Post> {
    return this.http.patch<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

}
