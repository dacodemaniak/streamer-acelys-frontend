import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { MediaType } from 'src/app/course/types/media-type';
import { MediaService } from 'src/app/medias/services/media.service';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {

  public medias: MediaType[] = []
  public searchText: string = ''

  @Output()
  public idMedia: EventEmitter<number> = new EventEmitter<number>()


  constructor(private _service: MediaService) { }

  ngOnInit(): void {
    this._service.findAll()
      .pipe(
        take(1)
      ).subscribe((medias: MediaType[]) => {
        this.medias = medias
        this.medias.sort((s1: MediaType, s2: MediaType) => s1.id! - s2.id!)
      })

  }

  public addMedia(id: number) {
    this.idMedia.emit(id)
  }


  public onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue
    // console.log(this.searchText)
  }

}
