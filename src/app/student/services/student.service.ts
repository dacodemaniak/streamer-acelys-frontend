import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { IStudent } from '../interfaces/i-student';
import { UserModel } from '../../user/models/user-model';
import { SimpleStudent } from '../types/simple-student-type';

import { environment } from './../../../environments/environment'
import { IUserService } from 'src/app/user/interfaces/i-user-service';
@Injectable({
  providedIn: 'root'
})
export class StudentService implements IUserService {

  private readonly endpoint: string = `${environment.apiRootUri}students`

  constructor(
    private _httpClient: HttpClient // DI Angular
  ) { }

  /**
   * Send a GET request to http://127.0.0.1:5000/api/v1/students
   * @returns Observable<IStudent>
   */
  public findAll(): Observable<IStudent[]> {
    return this._httpClient.get<IStudent[]>(
      this.endpoint
    )
  }

  public findSimpleStudents(): Observable<SimpleStudent[]> {
    return this._httpClient.get<SimpleStudent[]>(
      this.endpoint + '/simple'
    )
  }

  public findOne(id: number): Observable<UserModel> {
    return this._httpClient.get<any>(
      this.endpoint + '/' + id
    )
    .pipe(
      tap((response: any) => {
        console.log(JSON.stringify(response))
      }),
      take(1),
      map((student: any) => student)
    )
  }

  public findByEmail(email: string): void {}

  public findByLoginOrEmail(email: string, login: string): void {}

  public add(student: UserModel): Observable<any> {
    return this._httpClient.post<UserModel>(
      this.endpoint,
      student
    )
  }

  public update(student: UserModel): Observable<HttpResponse<any>> {
    return this._httpClient.put<UserModel>(
      this.endpoint,
      student,
      {
        observe: 'response'
      }
    )
  }

  public remove(id: number): Observable<HttpResponse<any>> {
    return this._httpClient.delete<UserModel>(
      `${this.endpoint}/${id}`,
      {
        observe: 'response'
      }
    )
  }

  public removeStudents(students: Array<SimpleStudent>): Observable<Array<number>> {
    return this._httpClient.request<Array<number>>(
      'delete',
      `${this.endpoint}`,
      {
        body: students.filter((s: SimpleStudent) => s.isSelected).map((s: SimpleStudent) => s.id)
      }
    )
  }
}
