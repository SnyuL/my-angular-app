// src/app/core/services/user.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private api: ApiService) {}

  // 获取所有用户
  getUsers() {
    return this.api.get<any[]>('users');
  }

  // 获取单个用户
  getUser(id: number) {
    return this.api.get<any>('users', { id });
  }

  // 登录
  login(email: string, password: string) {
    return this.api.post<any>('login', { email, password });
  }
}