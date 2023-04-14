import { Component, OnInit } from '@angular/core';
import { CourseType } from '../../types/course-type';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss'],
})
export class ViewCourseComponent implements OnInit {
  public course: CourseType;

  constructor() {
    this.course = JSON.parse(sessionStorage.getItem('ModifiedCourse') + '');
  }

  ngOnInit(): void {
    console.log(this.course);
  }
}
