import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private _endpoint = `${environment.uploadRootUri}/`

  constructor(private _httpClient: HttpClient) { }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const request = new HttpRequest('POST', `${this._endpoint}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._httpClient.request(request);

  }

  getFiles(): Observable<any> {
    return this._httpClient.get(`${this._endpoint}/files`);
  }
}
