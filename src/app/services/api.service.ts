import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BaseURL = environment.backendApiUrl;
  constructor(private http: HttpClient) {
    this.BaseURL = environment.backendApiUrl;
  }

  login(username: string, password: string) {
    return this.http
      .post(`${this.BaseURL}/api/auth/login`, { username, password })
      .pipe(catchError((err) => of(this.handleError(err))));
  }

  getAll() {
    return this.http
      .get(`${this.BaseURL}/api/devices`)
      .pipe(catchError((err) => of(this.handleError(err))));
  }
  addDevice(device: any) {
    return this.http
      .post(`${this.BaseURL}/api/devices/add_device`, device)
      .pipe(catchError((err) => of(this.handleError(err))));
  }

  private handleError(error: any) {
    if (error.status === 404) {
      alert('Error: not found');
    } else if (error.status === 400) {
      alert('Error: bad input');
    } else if (error.status === 401) {
      alert('invalid credential');
    } else {
      alert(error.error.message);
      throw error;
    }
  }
}
