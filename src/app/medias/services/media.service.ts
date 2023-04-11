import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, take, tap } from 'rxjs';
import { MediaType } from 'src/app/course/types/media-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private readonly endpoint: string = `${environment.apiRootUri}medias`

  constructor(private _httpClient: HttpClient) { }

  public findAll(): Observable<MediaType[]> {
    return this._httpClient.get<MediaType[]>(
      this.endpoint
    )
  }

  public findOne(id: number): Observable<MediaType> {
    return this._httpClient.get<any>(
      this.endpoint + '/' + id
    )
      .pipe(
        tap((response: any) => {
          // console.log(JSON.stringify(response))
        }),
        take(1),
        map((media: any) => media)
      )
  }

  public add(media: MediaType): Observable<any> {
    return this._httpClient.post<MediaType>(
      this.endpoint,
      media
    )
  }

}
