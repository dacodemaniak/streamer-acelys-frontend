import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tile } from '../../models/tile';

@Component({
  selector: 'dashboard-conceptor',
  templateUrl: './conceptor.component.html',
  styleUrls: ['./conceptor.component.scss']
})
export class ConceptorComponent implements OnInit {
  private _rootAction = ['/', 'dashboard', 'conceptor']

  public tiles: Array<Tile> = []

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.tiles.push(
      {
        title: 'Course Management',
        summary: 'Create, edit or delete your courses',
        action: [...this._rootAction, 'course'],
      },
      {
        title: 'My modules',
        summary: 'Create, edit or delete your modules',
        action: [...this._rootAction, 'module'],
      },
      {
        title: 'Media Hub',
        summary: 'Create, edit or delete your medias',
        action: [...this._rootAction, 'media'],
      }
    )
    console.log(this.tiles);
  }

  isConceptorRoute(): boolean {
    return this._router.url === '/dashboard/conceptor';
  }

}
