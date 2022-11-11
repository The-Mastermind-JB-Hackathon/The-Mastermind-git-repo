import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BaseURL = environment.backendApiUrl
  constructor(private http: HttpClient) {
    this.BaseURL = environment.backendApiUrl
  }

  login(username: string, password: string) {
    return this.http.post(`${this.BaseURL}/api/auth/login`, { username, password });
  }

  getAll(){
    return true
  }
}
