import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  public tiles: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

  }
}
