// src/app/core/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private useMock = environment.useMock;
    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // 基础GET请求
  get<T>(endpoint: string, params?: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    
    if (this.useMock) {
      return this.mockRequest<T>(endpoint, params);
    }
    
    return this.http.get<T>(url, { 
      params: this.buildParams(params) 
    });
  }

  // 基础POST请求
  post<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    
    if (this.useMock) {
      return this.mockRequest<T>(endpoint, body);
    }
    
    return this.http.post<T>(url, body);
  }

  // 构建查询参数
  private buildParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          httpParams = httpParams.append(key, params[key]);
        }
      });
    }
    return httpParams;
  }

  private mockRequest<T>(endpoint: string, data?: any): Observable<T> {
    
    const mockData = this.getMockData(endpoint, data);
    console.log('Mock请求:', endpoint, data);
    return of(mockData as T).pipe(delay(1000)); // 模拟网络延迟
  }

  private getMockData(endpoint: string, params?: any): any {
    const basePath = endpoint.replace(/^api\//, '').split('/')[0];
    
    const mocks: Record<string, any> = {
      'users': [
        { id: 1, name: 'Mock用户1', email: 'mock1@test.com' },
        { id: 2, name: 'Mock用户2', email: 'mock2@test.com' }
      ],
      'user': { id: params?.id, name: 'Mock用户', email: 'mock@test.com' },
      'login': { success: true, token: 'mock-token' }
    };
    
    console.log('Mock查找:', basePath, '在:', mocks[basePath]);
    return mocks[basePath] ?? null;
  }
}