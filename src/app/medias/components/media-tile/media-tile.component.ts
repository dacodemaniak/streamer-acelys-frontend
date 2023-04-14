import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { MediaType } from 'src/app/course/types/media-type';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'media-tile',
  templateUrl: './media-tile.component.html',
  styleUrls: ['./media-tile.component.scss'],
})
export class MediaTileComponent implements OnInit {
  @Input() public mediaInfo: MediaType | undefined;
  @Output() public mediaInfoChange = new EventEmitter<MediaType>();

  public typeMediaIcon: any = {
    video: 'video_camera_back',
    slide: 'slideshow',
    document: 'insert_drive_file',
    audio: 'audiotrack',
    image: 'image',
    animation: 'animation',
    interactive: 'slow_motion_video',
    pdf: 'picture_as_pdf',
  };

  constructor(private _mediaService: MediaService) { }

  ngOnInit(): void { }

  getIcon(type: string | undefined): string {
    const t = type!.toLowerCase();
    return this.typeMediaIcon[t];
  }

  deleteModule(mediaID: number | undefined): void {
    const data: MediaType | undefined = this.mediaInfo;
    this._mediaService
      .remove(mediaID!)
      .pipe(take(1))
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.mediaInfoChange.emit(data);
        },
      });
  }

  editModule(arg0: MediaType | undefined) {
    throw new Error('Method not implemented.');
  }
  viewModule(arg0: number | undefined) {
    throw new Error('Method not implemented.');
  }
}
