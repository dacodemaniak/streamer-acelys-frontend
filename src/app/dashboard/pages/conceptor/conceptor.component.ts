import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-conceptor',
  templateUrl: './conceptor.component.html',
  styleUrls: ['./conceptor.component.scss']
})
export class ConceptorComponent implements OnInit {
  public tiles: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
