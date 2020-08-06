import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from 'src/models/todo.model';
import { map } from 'rxjs/operators';

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

  createTodo(details: Omit<ITodo, '_id' | 'isComplete'>): Observable<ITodo> {
    return this.http.post<{ todo: ITodo }>(TODO_API_URL, details,
      {
        headers: this.getHeaders(),
      }).pipe(map(({ todo }) => todo));
  }

  deleteTodo(todoId: string): Observable<string> {
    return this.http.delete(`${TODO_API_URL}/${todoId}`,
      {
        headers: this.getHeaders(),
        responseType: 'text',
      });
  }

  toggleTodo(todoId: string): Observable<string> {
    return this.http.put(`${TODO_API_URL}/${todoId}/toggle`, { /* empty body */ },
    {
      headers: this.getHeaders(),
      responseType: 'text',
    });
  }
}
