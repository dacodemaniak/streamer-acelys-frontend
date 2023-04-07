import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserService } from './../../user/services/user.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private readonly _notSecuredUris: Array<string> = [
    `${environment.apiRootUri}user/login`
  ]

  constructor(
    private _userService: UserService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._isNotSecuredUri(req.url)) {
      return next.handle(req)
    }

    // Clone the request with Authorization headers
    const authReq = req.clone({
      headers: new HttpHeaders(`Authorization: Bearer ${this._userService.user.jwtToken}`)
    })

    return next.handle(authReq)
    .pipe(
      catchError((errorResponse: HttpErrorResponse, caught$) => {
        if (errorResponse.status === 401) {
          this._userService.logout()
        }
        return throwError(() => caught$)
      })
    )
  }

  private _isNotSecuredUri(reqUrl: string): boolean {
    return this._notSecuredUris.filter((uri: string) => uri === reqUrl).length > 0
  }
}

export const authInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptorService,
  multi: true
}
