import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/services/user.service';
import { Tile } from './models/tile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   * Tiles to display in the HTML template
   */
  public tiles: Array<Tile> = []

  /**
   * Specify if a "user" is admin or not (default true)
   */
  public isAdmin: boolean = true

  public currentUser = {
    role: 'STUDENT'
  };

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    // this.tiles.push(
    //   // new tile for admin
    //   new Tile({
    //     title: 'Parameters',
    //     summary: 'Parameters management',
    //     action: ['dashboard'],
    //     isAdmin: true
    //   }),
    //   // new tile for student
    //   new Tile({
    //     title: 'Students',
    //     summary: 'Students management',
    //     action: ['/', 'student', 'list'],
    //     isAdmin: false,
    //     isStudent: false,
    //   }),
    //   // new tile for conceptor
    //   new Tile({
    //     title: 'Conceptors',
    //     summary: 'Conceptors management',
    //     action: ['dashboard'],
    //     isAdmin: false,
    //     isConceptor: true
    //   })
    // )
  }

  // Display the role of the current user in the dashboard, and return the string base on role
  showRole(currentUser: any): string {
    if (currentUser.role === 'ADMIN') {
      return 'Admin'
    } else if (currentUser.role === 'STUDENT') {
      return 'Student'
    } else if (currentUser.role === 'CONCEPTOR') {
      return 'Conceptor'
    } else {
      return 'User'
    }
  }

}
