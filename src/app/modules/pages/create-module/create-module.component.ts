import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  public moduleForm: FormGroup = new FormGroup({})
  public addMediaVisible: boolean = false;


  constructor(private _formBuilder: FormBuilder) { }

  /** FORM METHODS */

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

  /** ADD MEDIA METHOD */
  public addMedia(): void {
    this.addMediaVisible = !this.addMediaVisible
  }


}
