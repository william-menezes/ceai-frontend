import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';
import { Student } from '../interfaces/student';
import { Kinship } from '../interfaces/kinship';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly _baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this._baseUrl}/students`).pipe(
      first()
      //tap((students) => console.log(students))
    );
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this._baseUrl}/students/${id}`).pipe(
      first()
      //tap((student) => console.log(student))
    );
  }

  getKinship(): Observable<Kinship[]> {
    return this.http.get<Kinship[]>(`${this._baseUrl}/kinship`).pipe(
      first(),
      //tap((kinship) => console.log(kinship))
    );
  }

  getContacts(id: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this._baseUrl}/contacts/${id}`).pipe(
      first(),
      tap((contact) => console.log(contact))
    );
  }
}
