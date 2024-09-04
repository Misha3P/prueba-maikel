import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7241/api/users'; // URL actualizada para el servidor local

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    // Envía un DTO en lugar de un modelo de usuario completo
    const userDto = {
      Username: user.username,
      Email: user.email,
      PasswordHash: user.passwordHash
    };
    return this.http.post<User>(this.apiUrl, userDto);
  }

  updateUser(user: User): Observable<void> {
    // Envía un DTO en lugar de un modelo de usuario completo
    const userDto = {
      UserId: user.userId,
      Username: user.username,
      Email: user.email,
      PasswordHash: user.passwordHash
    };
    return this.http.put<void>(this.apiUrl, userDto);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
