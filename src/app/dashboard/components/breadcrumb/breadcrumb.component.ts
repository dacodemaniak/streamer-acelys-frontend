import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  private _baseBreadcrumb: string = "Dashboard";
  private _divideSymbol: string = " / ";

  constructor(private _routeData: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._routeData.root);
  }

  getBreadcrumb(): string {
    return this._baseBreadcrumb;
  }

}
