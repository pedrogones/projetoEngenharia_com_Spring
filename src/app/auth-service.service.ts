import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: string[] = [];
  private passwords: string[] = [];

  addUser(username: string, password: string) {
    this.users.push(username);
    this.passwords.push(password);
  }

  getUsernames(): string[] {
    return this.users;
  }

  getPasswords(): string[] {
    return this.passwords;
  }
}
