import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseHandlerComponent } from './course-handler/course-handler.component';
import { ListComponent } from './list/list.component';
import { ViewCourseComponent } from './pages/view-course/view-course.component';

@NgModule({
  imports: [RouterModule.forChild(CourseRoutingModule.routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'list',
      component: ListComponent,
      data: { title: 'Dashboard | All Course', breadcrumb: 'All Course' },
    },
    {
      path: 'add',
      component: CourseHandlerComponent,
      data: {
        title: 'Dashboard | Create a new Course',
        breadcrumb: 'Create a new course',
      },
    },
    {
      path: 'view',
      component: ViewCourseComponent,
    },
    // {
    //   path: 'conceptor',
    //   component: CourseListComponent,
    //   data: { title: 'Dashboard | Create a new module', breadcrumb: 'Create ' },
    // },
    {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ];
}
