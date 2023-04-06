import { Component, OnInit } from '@angular/core';
import { TileType } from './types/tile-type';
import { UserService } from '../user/services/user.service';
import { RoleType } from './types/role-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   * Tiles to display in the HTML template
   */
  public tiles: Array<any> = []

  private _tiles: Array<TileType> = []
  /**
   * Specify if a "user" is admin or not (default true)
   */
  public isAdmin: boolean = true

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._tiles.push({
      title: 'Parameters',
      roles: [
        {
          role: 'Admin',
          summary: 'Settings management',
          route: ['/']
        }
      ]
    },
    {
      title: 'Students',
      roles : [
        {
          role: 'Admin',
          summary: 'Add, remove, update, view Students',
          route:[ '/', 'student', 'list']
        },
        {
          role: 'Student',
          summary: 'Access to courses you were affected to',
          route: ['/', 'student', 'course']
        }
      ]
    },
    {
      title: 'Courses',
      roles: [
        {
          role: 'Admin',
          summary: 'View courses',
          route: ['/', 'course']
        },
        {
          role: 'Conceptor',
          summary: 'Manage courses, build courses',
          route: ['/', 'conceptor', 'course']
        }
      ]
    })

    // Filter only tiles according identified user role
    this.tiles = this._tiles
      .filter((t: TileType) => t.roles.filter((r) => r.role = this._userService.user.role))
      .map((t: TileType) => {
        let tile: any = {
          title: t.title,
          summary: t.roles.filter((r: RoleType) => r.role === this._userService.user.role)[0].summary,
          action: t.roles.filter((r: RoleType) => r.role === this._userService.user.role)[0].route
        }
        return tile
      })

    }
  }
