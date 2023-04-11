import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MediaType } from 'src/app/course/types/media-type';
import { MediaService } from 'src/app/medias/services/media.service';

@Component({
  selector: 'app-create-media',
  templateUrl: './create-media.component.html',
  styleUrls: ['./create-media.component.scss']
})
export class CreateMediaComponent implements OnInit {

  @Input() visibility: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Output()
  public idNewMedia: EventEmitter<number> = new EventEmitter<number>()

  public mediaForm: FormGroup = new FormGroup({})
  public selectedOption: string = '';

  public options = new Map<string, number>([
    ["Video", 1],
    ["Slide", 2],
    ["Document", 3],
    ["Audio", 4],
    ["Image", 5],
    ["Animation", 6],
    ["Interactive", 7],
    ["PDF", 8]
  ])

  public onSelected(value: string): void {
    this.selectedOption = value;
    // console.log(value)
    // console.log(this.options.get(value))
  }

  get optionsMethod() {
    return Array.from(this.options.keys())
  }

  constructor(private _formBuilder: FormBuilder,
    private _mediaService: MediaService,
    private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {

    this.mediaForm = this._formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      summary: [
        ''
      ],
      duration: [
        '',
        [
          Validators.required
        ]
      ],
      url: [
        '',
        [
          Validators.required
        ]
      ],
      typeMedia: [
        '',
        [
          // Validators.required
        ]
      ]
    })
  }

  public addNewMedia(id: number) {
    this.idNewMedia.emit(id)
  }

  get c(): { [key: string]: AbstractControl } {
    return this.mediaForm.controls
  }

  onSubmit(): void {
    const conceptor: any = this._localStorageService.getMemberFromStorage()
    const newConceptor: any = { id: conceptor.id }
    const typeMedia: any = { id: this.options.get(this.selectedOption), value: this.selectedOption }
    const media: MediaType = {
      title: this.c['title'].value,
      summary: this.c['summary'].value,
      duration: this.c['duration'].value,
      url: this.c['url'].value,
      typeMedia: typeMedia,
      creator: newConceptor
    }
    console.log(media)
    this._mediaService.add(media)
      .subscribe((mediaType: MediaType) => {
        this.addNewMedia(mediaType.id!)
        this.newItemEvent.emit(false);
      })
  }



  onNoClick() {
    this.newItemEvent.emit(false);
  }
}
