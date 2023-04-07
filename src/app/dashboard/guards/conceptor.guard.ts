import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ConceptorGuard implements CanActivate {
  constructor(private _localStorageService: LocalStorageService,
    private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const requiredRole = next.data['role'];
    const member = this._localStorageService.getMemberFromStorage();

    if (member && requiredRole.includes(member.role)) {
      return true;
    }

    return this._router.navigate(['/dashboard'])
  }
}
