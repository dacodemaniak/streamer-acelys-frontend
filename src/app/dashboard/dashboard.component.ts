import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../core/services/local-storage.service';
import { Member } from '../user/models/member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isAdmin: boolean = true
  public currentUser: any;

  private _envKey: string = `${environment.storage.member.key}`;
  private _localStorageService = LocalStorageService.getInstance();

  constructor() { }

  ngOnInit(): void {
    this.getUserDatas()
  }

  getUserDatas() {
    const currentUserJson = this._localStorageService.getItem(this._envKey);
    if (currentUserJson) {
      this.currentUser = new Member(currentUserJson);
    }
  }

  showRole(currentUser: Member): string {
    return currentUser.getRoleName();
  }

}
