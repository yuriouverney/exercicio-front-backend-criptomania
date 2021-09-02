import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiPort = environment['API_REST_PORT'];
  apiUrl = environment['API_REST_URL'];

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}:${this.apiPort}/blog`)
  }

  public getInformacoesUsuario(id): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}:${this.apiPort}/blog/user/`+id)
  }

  public getInformacoesPost(id): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}:${this.apiPort}/blog/post/`+id)
  }
}
