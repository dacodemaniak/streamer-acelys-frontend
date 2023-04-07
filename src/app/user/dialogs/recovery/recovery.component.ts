import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

  public form: FormGroup = new FormGroup({})

  constructor(
    private _userService: UserService,
    public dialogRef: MatDialogRef<RecoveryComponent>) { }

  ngOnInit(): void {
    const loginControl: AbstractControl = new FormControl('', [Validators.required])
    const emailControl: AbstractControl = new FormControl('', [Validators.required])

    this.form.addControl('login', loginControl)
    this.form.addControl('email', emailControl)
  }

  onSubmit(): void {

    this._userService.recovery(this.form.value)
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.dialogRef.close(response)
        },
        error: (error: any) => {},
        complete: () => {
          this.form.controls['login'].setValue('')
          this.form.controls['email'].setValue('')
        }
      })
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

}
