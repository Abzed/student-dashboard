import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://student-management-3kzu.onrender.com/api/students'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any>{
    return this.http.get(url)
  }

  addStudent(data:any): Observable<any>{
    return this.http.post(url, data)
  }

}
