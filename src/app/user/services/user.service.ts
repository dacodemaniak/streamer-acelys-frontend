import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { IStorageStrategy } from './../../core/store/i-storage-strategy';
import { SessionStorageStrategy } from './../../core/store/session-storage-strategy';
import { LocalStorageStrategy } from './../../core/store/local-storage-strategy';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserType } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: UserType | undefined = undefined
  private _user$: BehaviorSubject<UserType  | undefined> = new BehaviorSubject(this._user)

  private _storageStrategy: IStorageStrategy

  constructor(
    private _httpClient: HttpClient
  ) {
    this._storageStrategy = environment.storage.auth.strategy === 'session' ?
      new SessionStorageStrategy() :
      new LocalStorageStrategy()
  }

  public set storageStrategy(strategy: IStorageStrategy) {
    this._storageStrategy = strategy
  }

  public get storageStrategy(): IStorageStrategy {
    return this._storageStrategy
  }

  public get user(): any {
    return this._user
  }

  set user(user: UserType) {
    this._user = user
    this._user$.next(this._user)
  }
  public get user$() {
    return this._user$
  }

  public validateToken(token: string): Observable<HttpResponse<any>> {
    const endPoint: string = `${environment.apiRootUri}user/${token}`
    return this._httpClient.get<HttpResponse<any>>(
      endPoint,
      {
        observe: 'response'
      }
    )
  }
  public authenticate(credentials: any): Observable<HttpResponse<any>> {
    const endPoint: string = `${environment.apiRootUri}user/login`
    return this._httpClient.post<UserType>(
      endPoint,
      credentials,
      {
        observe: 'response'
      }
    ).pipe(
      take(1),
      tap((response: HttpResponse<any>) => {
        if (response.status === 200) {
          this._user = response.body

          this._storageStrategy.store(this._user?.jwtToken)
          this._user$.next(this._user)
        }
      })
    )
  }

  public logout(): void {
    this._storageStrategy.remove()
    this._user = undefined
    this._user$.next(this._user)
    // Fallback to default strategy
    this._storageStrategy = environment.storage.auth.strategy === 'session' ?
      new SessionStorageStrategy() :
      new LocalStorageStrategy()
  }
}
