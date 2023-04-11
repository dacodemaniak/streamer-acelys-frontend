import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Member } from 'src/app/user/models/member';
import { UserService } from 'src/app/user/services/user.service';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../services/local-storage.service';



@Component({
  selector: 'member-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  public isOpenedList: any;
  public memberData!: Member;

  public user$: BehaviorSubject<any | undefined> | undefined
  public user!: Member

  private _localStorageService: LocalStorageService = LocalStorageService.getInstance();

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getMemberData();
    this._userService.user$
      .subscribe((_user: any) => {
        this.user = _user
      });
  }

  // Get the username of the member
  getMemberData(): void {
    this.memberData = new Member(this._localStorageService.getItem(`${environment.storage.member.key}`))
  }

  signOut(): void {
    this._userService.logout()
  }

}
