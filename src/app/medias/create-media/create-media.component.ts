import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

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
    ["Video", 1],
    ["Slide", 2],
    ["Document", 3],
    ["Audio", 4],
    ["Image", 5],
    ["Animation", 6],
    ["Interactive", 7],
    ["PDF", 8]
  ])


  get optionsMethod() {
    return Array.from(this.options.keys())
  }

  constructor(private _formBuilder: FormBuilder) { }

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

  onSubmit(): void {
    console.log(this.mediaForm.value);
  }

  onNoClick() {
    this.newItemEvent.emit(false);
  }
}
