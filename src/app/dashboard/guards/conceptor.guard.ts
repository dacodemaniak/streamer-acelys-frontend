import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Member } from 'src/app/user/models/member';

@Injectable({
  providedIn: 'root',
})
export class ConceptorGuard implements CanActivate {
  constructor(
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const requiredRoles = next.data['allowedRoles'];
    const member = new Member(this._localStorageService.getMemberFromStorage());

    if (member.role && requiredRoles.indexOf('CONCEPTOR') !== -1) {
      return true;
    }

    this._router.navigate(['https://google.com']);

    return false
  }
}
