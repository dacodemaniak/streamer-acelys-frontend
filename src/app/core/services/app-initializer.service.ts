import { APP_INITIALIZER, Injectable } from '@angular/core';
import { UserService } from './../../user/services/user.service';
import { environment } from './../../../environments/environment';
import { LocalStorageStrategy } from '../store/local-storage-strategy';
import { HttpResponse } from '@angular/common/http';
@Injectable()
export class AppInitializerService {

  constructor(
    private _userService: UserService
  ) { }

  init(): Promise<void> {
    return new Promise((resolve) => {
      let jsonToken: string | null = localStorage.getItem(environment.storage.auth.key)
      if (!jsonToken) {
        jsonToken  = sessionStorage.getItem(environment.storage.auth.key)
      }

      if (jsonToken) {
        this._userService.storageStrategy = new LocalStorageStrategy()
        this._userService.validateToken(JSON.parse(jsonToken))
          .subscribe({
            next: (response: HttpResponse<any>) => {
              this._userService.user = response.body
            },
            error: (error: any) => {
              this._userService.storageStrategy.remove()
            },
            complete: () => resolve()
          })
      } else {
        resolve()
      }
    })
  }

  public static initializeApp(_appInitializerService: AppInitializerService): any {
    return (): Promise<any> => {
      return _appInitializerService.init()
    }
  }
}

export const appInitializer = {
  provide: APP_INITIALIZER,
  useFactory: AppInitializerService.initializeApp,
  deps: [
    AppInitializerService
  ],
  multi: true
}
