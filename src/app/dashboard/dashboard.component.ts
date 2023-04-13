import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  public currentUser!: Member;

  private _envKey: string = `${environment.storage.member.key}`;
  private _localStorageService = LocalStorageService.getInstance();

  constructor(
    private _router: Router,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUserDatas()
  }

  getUserDatas() {
    this.currentUser = this._localStorageService.getMemberFromStorage()
  }

  showRole(currentUser: Member): string {
    return currentUser.getRoleName();
  }

  goToMediaAdd() {
    this._router.navigate(['dashboard/conceptor/media/add']);
  }

  goToModuleAdd() {
    this._router.navigate(['dashboard/conceptor/module/add']);
  }

  goToCourseAdd() {
    this._router.navigate(['dashboard/conceptor/course/add']);
  }

}
