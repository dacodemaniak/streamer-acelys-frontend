import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Member } from 'src/app/user/models/member';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  private _localStorageService: LocalStorageService = LocalStorageService.getInstance();

  constructor(private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const allowedRoles = next.data['allowedRoles'];
    const userRole = new Member(this._localStorageService.getMemberFromStorage()).getRoleName().toUpperCase();

    if (!allowedRoles.includes(userRole)) {
      this._router.navigate(['/not-found']);
      return false;
    }

    console.log('Authorized');
    const urlMap = new Map<string, string>([
      ['CONCEPTOR', '/dashboard/conceptor'],
      ['MANAGER', '/dashboard/manager'],
      ['STUDENT', '/dashboard/student'],
    ]);

    const correctUrl = urlMap.get(userRole);
    if (correctUrl && state.url !== correctUrl) {
      this._router.navigateByUrl(correctUrl);
      return false;
    }

    return true;
  }

}
