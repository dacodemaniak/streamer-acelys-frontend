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
        title: 'My courses',
        summary: 'Create, edit or delete your courses',
        action: [...this._rootAction, 'courses'],
      },
      // {
      //   title: 'My modules',
      //   summary: 'Create, edit or delete your modules',
      //   action: [...this._rootAction, 'modules'],
      // },
      // {
      //   title: 'My medias',
      //   summary: 'Create, edit or delete your medias',
      //   action: [...this._rootAction, 'medias'],
      // }
    )
    console.log(this.tiles);
  }

  isConceptorRoute(): boolean {
    return this._router.url === '/dashboard/conceptor';
  }

}
