import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() public tileInfo: any;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.tileInfo))
  }

  public onClick(object: any): void {
    this._router.navigate(object.action);
  }
}
