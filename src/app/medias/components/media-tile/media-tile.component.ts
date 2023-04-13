import { Component, Input, OnInit } from '@angular/core';
import { MediaType } from 'src/app/course/types/media-type';

@Component({
  selector: 'media-tile',
  templateUrl: './media-tile.component.html',
  styleUrls: ['./media-tile.component.scss']
})
export class MediaTileComponent implements OnInit {

  @Input() public mediaInfo: MediaType | undefined;

  public typeMediaIcon: any = {
    'video': 'video_camera_back',
    'slide': 'slideshow',
    'document': 'insert_drive_file',
    'audio': 'audiotrack',
    'image': 'image',
    'animation': 'animation',
    'interactive': 'slow_motion_video',
    'pdf': 'picture_as_pdf',
  }

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(type: string | undefined): string {
    const t = type!.toLowerCase();
    return this.typeMediaIcon[t];
  }

  deleteModule(arg0: MediaType | undefined) {
    throw new Error('Method not implemented.');
  }
  editModule(arg0: MediaType | undefined) {
    throw new Error('Method not implemented.');
  }
  viewModule(arg0: number | undefined) {
    throw new Error('Method not implemented.');
  }
}
