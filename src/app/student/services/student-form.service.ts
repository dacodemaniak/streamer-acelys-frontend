import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IStudent } from '../interfaces/i-student';
import { UserModel } from '../../user/models/user-model';
import { StudentService } from './student.service';
import { UserFormService } from 'src/app/user/services/user-form.service';
import { IUserService } from 'src/app/user/interfaces/i-user-service';

@Injectable({
  providedIn: 'root'
})
export class StudentFormService extends UserFormService {

  constructor(
    _formBuilder: FormBuilder,
    _studentService: StudentService
  ) {
    super(_studentService, _formBuilder)
    this._buildForm()
  }

  public override onSubmit(): Observable<any> {
    this._user.role = {
      id: 2,
      role: 'Student'
    }
    return super.onSubmit()
  }
}
