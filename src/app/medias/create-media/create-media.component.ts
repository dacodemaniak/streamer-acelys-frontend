import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MediaType } from 'src/app/course/types/media-type';
import { ModuleService } from 'src/app/modules/services/module.service';
import { Member } from 'src/app/user/models/member';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-create-media',
  templateUrl: './create-media.component.html',
  styleUrls: ['./create-media.component.scss'],
})
export class CreateMediaComponent implements OnInit {
  @Input() visibility: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();

  public mediaForm: FormGroup = new FormGroup({});
  public selectedOption: string = '';

  public options = new Map<string, number>([
    ['Video', 1],
    ['Slide', 2],
    ['Document', 3],
    ['Audio', 4],
    ['Image', 5],
    ['Animation', 6],
    ['Interactive', 7],
    ['PDF', 8],
  ]);

  constructor(
    private _formBuilder: FormBuilder,
    private _mediaService: MediaService,
    private _moduleService: ModuleService,
    private _router: Router,
    private _localStorageService: LocalStorageService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.mediaForm = this._formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(8)]],
      summary: [''],
      duration: ['', [Validators.required]],
      url: ['', [Validators.required]],
      typeMedia: ['', [Validators.required]],
    });
  }

  get c(): { [key: string]: AbstractControl } {
    return this.mediaForm.controls;
  }

  get optionsMethod() {
    return Array.from(this.options.keys());
  }

  onSubmit(): void {
    // Search the number from map options based on the name
    const typeMediaID = this.options.get(this.mediaForm.value.typeMedia);
    const conceptor: Member = this._localStorageService.getMemberFromStorage()
    const newConceptor: any = { id: conceptor.id }
    const typeMedia: any = { id: typeMediaID, value: this.mediaForm.value.typeMedia }
    const media: MediaType = {
      title: this.c['title'].value,
      summary: this.c['summary'].value,
      duration: this.c['duration'].value,
      url: this.c['url'].value,
      typeMedia: typeMedia,
      creator: newConceptor
    }
    console.log(media);
    this._mediaService.add(media).pipe(take(1)).subscribe(
      {
        next: (response: any) => {
          console.log(response);
        }
      }
    )


  }

  onNoClick() {
    this.newItemEvent.emit(false);
  }
}
