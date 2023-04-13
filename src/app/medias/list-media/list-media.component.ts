import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ToastService } from 'src/app/core/toast.service';
import { MediaType } from 'src/app/course/types/media-type';
import { Member } from 'src/app/user/models/member';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  public medias: MediaType[] = [];

  private _localStorageService: LocalStorageService = LocalStorageService.getInstance();
  private _currentUser: Member = this._localStorageService.getMemberFromStorage();

  constructor(
    private _mediaService: MediaService,
    private _toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this._mediaService.findByCreator(this._currentUser.id!).pipe(take(1)).subscribe(
      (response: MediaType[]) => {
        this.medias = response;
      }
    )
  }

}
