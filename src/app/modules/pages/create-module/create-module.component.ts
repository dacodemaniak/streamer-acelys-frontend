import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MediaType } from 'src/app/course/types/media-type';
import { ModuleType } from 'src/app/course/types/module-type';
import { MediaServicesService } from 'src/app/medias/services/media-services.service';
import { ModuleService } from '../../services/module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  public moduleForm: FormGroup = new FormGroup({})
  public addMediaVisible: boolean = false
  public createMediaVisible: boolean = false
  public medias: Array<MediaType> = new Array<MediaType>()


  constructor(private _formBuilder: FormBuilder,
    private _mediaService: MediaServicesService,
    private _moduleService: ModuleService,
    private _router: Router) { }

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
    const module: ModuleType = {
      name: this.c['name'].value,
      objective: this.c['objective'].value,
      selected: false,
      medias: this.medias
    }
    this._moduleService.add(module)
      .subscribe((ModuleType: ModuleType) => {
        this._router.navigate(['/'])
      })
  }



  /** ADD MEDIA METHOD */
  public showAddMedia(): void {
    if (this.createMediaVisible) {
      this.createMediaVisible = false
      this.addMediaVisible = !this.addMediaVisible
    } else {
      this.addMediaVisible = !this.addMediaVisible
    }
  }

  public addMedia(id: number): void {
    this._mediaService.findOne(id)
      .subscribe({
        next: (media: MediaType) => {
          this.medias.push(media)
        },
        error: (error: any) => {
          console.log('Something went wrong')
        }
      })
  }

  public removeMedia(media: MediaType): void {
    this.medias.splice(
      this.medias.indexOf(media),
      1
    )
  }


  /** CREATE MEDIA METHOD */
  public showCreateMedia(): void {
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
