import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from '../../../user/models/user-model';
import { StudentFormService } from '../../services/student-form.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  public okButtonLabel: string = 'Add'

  public form: FormGroup = new FormGroup({})

  private _student: UserModel

  constructor(
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _studentFormService: StudentFormService
  ) {
    this._student = this.data.student
    if (this._student.id) {
      this.okButtonLabel = 'Update'
    }
  }

  ngOnInit(): void {
    this._studentFormService.buildForm(this._student)
    this.form = this._studentFormService.form
  }

  public get c(): {[key: string]: AbstractControl} {
    return this._studentFormService.c
  }

  /**
   * Event triggered if user click on the No button
   */
  public onNoClick(): void {
    this.dialogRef.close()
  }

  /**
   * Event triggered if user click on Yes button
   */
  public onSubmit(): void {
    this._studentFormService.onSubmit()
      .subscribe((student: UserModel) => {
        this.dialogRef.close(student)
      })
  }

}
