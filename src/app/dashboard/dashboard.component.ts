import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   * Tiles to display in the HTML template
   */
  // public tiles: Array<Tile> = []

  /**
   * Specify if a "user" is admin or not (default true)
   */
  public isAdmin: boolean = true

  public currentUser = {
    role: 'CONCEPTOR'
  };

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {

  }

  // Display the role of the current user in the dashboard, and return the string base on role
  showRole(currentUser: any): string {
    if (currentUser.role === 'MANAGER') {
      return 'Manager'
    } else if (currentUser.role === 'STUDENT') {
      return 'Student'
    } else if (currentUser.role === 'CONCEPTOR') {
      return 'Conceptor'
    } else {
      return 'User'
    }
  }

}
