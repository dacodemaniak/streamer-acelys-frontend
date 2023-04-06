import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';
import { UserType } from 'src/app/user/types/user.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$: BehaviorSubject<any | undefined>
  public user: UserType | undefined = undefined

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.user$ = this._userService.user$
  }

  ngOnInit(): void {
    this._userService.user$
      .subscribe((_user: any) => {
        this.user = _user
      })
  }

  logout(): void {
    this._userService.logout()
    this._router.navigate(['/', 'user'])
  }
}
