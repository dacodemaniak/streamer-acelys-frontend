import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ToastService } from 'src/app/core/toast.service';
import { CourseService } from 'src/app/course/services/course.service';
import { CourseListType } from 'src/app/course/types/course-list-type';
import { ModuleType } from 'src/app/course/types/module-type';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  public courses: Array<CourseListType> = [];
  public coursesConceptor: Array<CourseListType> = [];

  constructor(
    private _courseService: CourseService,
    private _toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this._courseService
      .findFullCourses()
      .pipe(take(1))
      .subscribe((response: CourseListType[]) => {
        this.courses = response;

        /*   this.coursesConceptor = this.courses.filter((course) => {
          return course.conceptorId = this.currentUserID;
        })
 */
        //recuperer l'utilisateur courant
        /*        this._userService.getCurrentUser().pipe(take(1)).subscribe((user) => {
          this.currentUserId = user.id;
        }); */
      });

    // recuperer tous les cours associer aux conceptor et les mettre dans coursesConceptor
  }

  onCourseToggle(course: CourseListType): void {
    if (course.isSelected) {
      this.courses
        .filter((inCourse: CourseListType) => inCourse.isSelected)
        .forEach((inCourse: CourseListType) => {
          if (course.id !== inCourse.id) {
            inCourse.isSelected = false;
            // Close all modules too...
            inCourse.modules!.forEach(
              (module: ModuleType) => (module.selected = false)
            );
          }
        });
    }
  }

  doRemoveCourse(course: CourseListType): void {
    this._courseService
      .remove(course.id!)
      .pipe(take(1))
      .subscribe({
        next: (response: HttpResponse<any>) => {
          const message: string = `${course.title} was removed. ${course.modules!.length
            } modules were affected`;
          this._toastService.show(message);
        },
        error: (error: any) => {
          const badMessage: string = `Sorry, ${course.title} was already removed`;
          this._toastService.show(badMessage);
        },
        complete: () => {
          this.courses.splice(this.courses.indexOf(course), 1);
        },
      });
  }

  onCopyCourse(course: CourseListType) {
    this.coursesConceptor.push(course);

    /*  this._courseService
      .copyCourse(course)
      .pipe(take(1))
      .subscribe({
        complete: () => {
          this.coursesConceptor = this.courses.splice(
            this.courses.indexOf(course),
            1
          );
        },
      }); */

    /*  this._courseService
      .copyCourse(course)
      .pipe(take(1))
      .subscribe({
        complete: () => {
          this.coursesConceptor.push(course);
        },
      }); */
  }
}
