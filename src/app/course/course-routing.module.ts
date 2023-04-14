import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../dashboard/guards/role.guard';
import { CourseHandlerComponent } from './course-handler/course-handler.component';
import { ListComponent } from './list/list.component';
import { ViewCourseComponent } from './pages/view-course/view-course.component';

@NgModule({
  imports: [RouterModule.forChild(CourseRoutingModule.routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {
  public static routes: Routes = [
    // {
    //   path: '',
    //   redirectTo: 'list',
    //   pathMatch: 'full',
    // },
    {
      path: 'list',
      component: ListComponent,
      canActivate: [RoleGuard],
      data: { allowedRoles: ['MANAGER'], title: 'Dashboard | All Course', breadcrumb: 'All Course' },
    },
    {
      path: 'add',
      component: CourseHandlerComponent,
      canActivate: [RoleGuard],
      data: {
        allowedRoles: ['CONCEPTOR'],
        title: 'Dashboard | Create a new Course',
        breadcrumb: 'Create a new course',
      },
    },
    {
      path: 'edit',
      component: CourseHandlerComponent,
      canActivate: [RoleGuard],
      data: {
        allowedRoles: ['CONCEPTOR'],
        title: 'Dashboard | Edit course details',
        breadcrumb: 'Edit course details',
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
    // {
    //   path: '**',
    //   redirectTo: 'list',
    //   pathMatch: 'full',
    // },
  ];
}
