import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly _baseUrl: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this._baseUrl).pipe(
      first(),
      //tap((students) => console.log(students))
    );
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this._baseUrl}/${id}`).pipe(
      first(),
      //tap((student) => console.log(student))
    );
  }
}
