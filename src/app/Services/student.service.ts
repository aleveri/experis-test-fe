import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfiguration } from '../app.configuration';
import { Student } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private appConfiguration: AppConfiguration) { }

  list(page: number, size: number) {
    return this.http.get(`${AppConfiguration.API_URL}api/student/list?page=${page}&size=${size}`, { headers: this.appConfiguration.getHeader() });
  }

  create(student: Student) {
    return this.http.post(`${AppConfiguration.API_URL}/api/student`, student, {
      headers: this.appConfiguration.getHeader()
    })
  }

  update(student: Student) {
    return this.http.put(`${AppConfiguration.API_URL}/api/student`, student, {
      headers: this.appConfiguration.getHeader()
    })
  }

  delete(id: string) {
    return this.http.delete(`${AppConfiguration.API_URL}/api/student?id=${id}`, { headers: this.appConfiguration.getHeader() })
  }
}