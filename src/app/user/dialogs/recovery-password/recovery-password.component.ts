import { HttpResponse } from '@angular/common/http';
import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: HttpResponse<any>,
    public dialogRef: MatDialogRef<RecoveryPasswordComponent>) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close()
  }

}
