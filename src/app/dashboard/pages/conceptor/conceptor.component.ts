import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dashboard-conceptor',
  templateUrl: './conceptor.component.html',
  styleUrls: ['./conceptor.component.scss']
})
export class ConceptorComponent implements OnInit {
  public tiles: Array<any> = []

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Dashboard Conceptor');
  }

}
