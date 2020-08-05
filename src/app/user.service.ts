import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const USER_API_URL = 'http://localhost:4000/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${USER_API_URL}/login`, {
      username, password
    });
  }

  register(username: string, password: string, email: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${USER_API_URL}/register`, {
      username, password, email
    });
  }
}
