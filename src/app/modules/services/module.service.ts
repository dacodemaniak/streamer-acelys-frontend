import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleType } from 'src/app/course/types/module-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private readonly endpoint: string = `${environment.apiRootUri}modules`

  constructor(private _httpClient: HttpClient) { }

  public add(module: ModuleType): Observable<any> {
    return this._httpClient.post<ModuleType>(
      this.endpoint,
      module
    )
  }
}
