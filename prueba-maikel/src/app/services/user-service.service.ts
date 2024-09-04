import { Injectable } from '@angular/core';
import { User } from '../models/models';
import { users } from '../data/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserById(userId: string): User | undefined {
    return users.find(user => user.UserId === userId);
  }

  authenticate(username: string, password: string): User | undefined {
    // Implementación básica de autenticación (sin verificación real de contraseñas)
    return users.find(user => user.Username === username);
  }
}