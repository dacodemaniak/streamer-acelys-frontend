import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  public moduleForm: FormGroup = new FormGroup({})


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.moduleForm = this._formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      objective: [
        ''
      ]
    })
  }

  get c(): { [key: string]: AbstractControl } {
    return this.moduleForm.controls
  }

  onNoClick(): void {
  }

  onSubmit(): void {
  }


}
