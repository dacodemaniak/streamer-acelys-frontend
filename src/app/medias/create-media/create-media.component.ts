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

  onSubmit(): void { }

  onNoClick() {
    this.newItemEvent.emit(false);
  }
}
