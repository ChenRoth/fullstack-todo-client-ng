import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TODO_API_URL = 'http://localhost:4000/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }


  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(TODO_API_URL, {
      headers: this.getHeaders(),
    });
  }
}
