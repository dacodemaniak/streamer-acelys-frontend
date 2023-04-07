import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MediaType } from 'src/app/course/types/media-type';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.scss']
})
export class UpdateModuleComponent implements OnInit {

  public moduleForm: FormGroup = new FormGroup({})
  public addMediaVisible: boolean = false
  public createMediaVisible: boolean = false
  public medias: Array<MediaType> = new Array<MediaType>()


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
    if (this.createMediaVisible) {
      this.createMediaVisible = false
      this.addMediaVisible = !this.addMediaVisible
    } else {
      this.addMediaVisible = !this.addMediaVisible
    }
  }


  /** CREATE MEDIA METHOD */
  public createMedia(): void {
    if (this.addMediaVisible) {
      this.addMediaVisible = false
      this.createMediaVisible = !this.createMediaVisible
    } else {
      this.createMediaVisible = !this.createMediaVisible
    }
  }

  public closeCreate(value: boolean) {
    this.createMediaVisible = value
  }



}
