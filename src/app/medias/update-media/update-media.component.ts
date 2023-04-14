import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, lastValueFrom, take } from 'rxjs';
import { FileUploadService } from 'src/app/core/services/file-upload.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MediaType } from 'src/app/course/types/media-type';
import { ModuleService } from 'src/app/modules/services/module.service';
import { Member } from 'src/app/user/models/member';
import { CreateMediaComponent } from '../create-media/create-media.component';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-update-media',
  templateUrl: '../create-media/create-media.component.html',
  styleUrls: ['./update-media.component.scss'],
})
export class UpdateMediaComponent implements OnInit {
  @Input() visibility: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();

  public actionTitle: string = 'Update';
  public media!: MediaType;

  public mediaForm: FormGroup = new FormGroup({});
  public mediaToUpdate: MediaType | undefined;

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

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _mediaService: MediaService,
    private _moduleService: ModuleService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _localStorageService: LocalStorageService,
    private _snackBar: MatSnackBar,
    private _fileUpload: FileUploadService,
    @Optional() @Inject(MAT_DIALOG_DATA) public onModal: boolean,
    @Optional() public dialogRef: MatDialogRef<CreateMediaComponent>
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
    });

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
    // TODO Assign all the updated value to the mediaToUpdate
    // TODO Call the service to update
    // TODO Next Toast or error
  }

  onNoClick() {
    this.onModal
      ? this.dialogRef.close(this.mediaForm.value)
      : this.newItemEvent.emit(false);
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.mediaForm.controls['file'].setValue(file);
      }
    }
  }

  private submitMediaWithURL() {
    const typeMediaID = this.options.get(this.mediaForm.value.typeMedia);
    const conceptor: Member = this._localStorageService.getMemberFromStorage();
    const newConceptor: any = { id: conceptor.id };
    const typeMedia: any = {
      id: typeMediaID,
      title: this.mediaForm.value.typeMedia,
    };
    const media: MediaType = {
      title: this.c['title'].value,
      summary: this.c['summary'].value,
      duration: this.c['duration'].value,
      url: this.c['url'].value,
      typeMedia: typeMedia,
      creator: newConceptor,
    };
    this.onModal
      ? this.dialogRef.close(media)
      : this._mediaService
        .add(media)
        .pipe(take(1))
        .subscribe({
          next: (response: any) => {
            // TODO Display Success Message
            console.log(response);
            this._snackBar.open(`"${media.title}" was created.`, 'Close');
          },
          complete: () => {
            this.mediaForm.reset();
          },
        });
  }

  private async submitMediaWithFile(): Promise<void> {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        try {
          const response = await lastValueFrom(
            this._fileUpload.uploadFile(this.currentFile)
          );
          console.log(response);
          const mediaUrl = response.toString();
          const typeMediaID = this.options.get(this.mediaForm.value.typeMedia);
          const conceptor: Member =
            this._localStorageService.getMemberFromStorage();
          const newConceptor: any = { id: conceptor.id };
          const typeMedia: any = {
            id: typeMediaID,
            title: this.mediaForm.value.typeMedia,
          };
          const media: MediaType = {
            title: this.c['title'].value,
            summary: this.c['summary'].value,
            duration: this.c['duration'].value,
            url: mediaUrl,
            typeMedia: typeMedia,
            creator: newConceptor,
          };
          this.onModal
            ? this.dialogRef.close(media)
            : this._mediaService
              .add(media)
              .pipe(take(1))
              .subscribe({
                next: (response: any) => {
                  // TODO Display Success Message
                  console.log(response);

                  this._snackBar.open(
                    `"${media.title}" was created.`,
                    'Close'
                  );
                },
                complete: () => {
                  this.mediaForm.reset();
                },
              });
          this.fileInfos = this._fileUpload.getFiles();
        } catch (error) {
          this.message = 'Could not upload the file!';
          this._snackBar.open(`${this.message}`, 'Close');

          this.currentFile = undefined;
        }
      }

      this.selectedFiles = undefined;
    }
  }
}
