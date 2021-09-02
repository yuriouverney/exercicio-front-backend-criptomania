import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  apiPort = environment['API_REST_PORT'];
  apiUrl = environment['API_REST_URL'];

  constructor(private http: HttpClient) { }

  public getCalculos(dados): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}:${this.apiPort}/calculadora`,dados)
  }
  
}