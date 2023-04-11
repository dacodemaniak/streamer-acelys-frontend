import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dashboard-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  public tiles: Array<any> = [];

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Dashboard Students');
  }
}
