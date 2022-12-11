import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Students } from '../apiclass';

const url = 'https://student-management-3kzu.onrender.com/api/students'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get(url)
  }
  getUserBoard(): Observable<any> {
    return this.http.get(url , { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(url , { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(url , { responseType: 'text' });
  }

}
