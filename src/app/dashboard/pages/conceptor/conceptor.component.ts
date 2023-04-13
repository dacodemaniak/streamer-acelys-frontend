import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-conceptor',
  templateUrl: './conceptor.component.html',
  styleUrls: ['./conceptor.component.scss']
})
export class ConceptorComponent implements OnInit {
  public tiles: Array<any> = []

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  isConceptorRoute(): boolean {
    return this._router.url === '/dashboard/conceptor';
  }

}
