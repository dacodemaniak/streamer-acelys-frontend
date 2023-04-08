import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from '../course/pages/conceptor/course-list/course-list.component';
import { DashboardComponent } from './dashboard.component';
import { ConceptorGuard } from './guards/conceptor.guard';
import { ManagerGuard } from './guards/manager.guard';
import { ConceptorComponent } from './pages/conceptor/conceptor.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { StudentComponent } from './pages/student/student.component';

@NgModule({
  imports: [[RouterModule.forChild(DashboardRoutingModule.routes)]],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      data: { allowedRoles: ['CONCEPTOR', 'MANAGER', 'STUDENT'] },
      children: [
        {
          path: 'conceptor',
          component: ConceptorComponent,
          canActivate: [ConceptorGuard],
          data: { allowedRoles: ['CONCEPTOR'], title: 'Conceptor' },
        },
        {
          path: 'courses',
          component: CourseListComponent,
          canActivate: [ConceptorGuard],
          data: { allowedRoles: ['CONCEPTOR'], title: 'Course List' },
        },
        {
          path: 'manager',
          component: ManagerComponent,
          canActivateChild: [ManagerGuard],
          data: { allowedRoles: ['MANAGER'], title: 'Manager' },
        },
        {
          path: 'student',
          component: StudentComponent,
          // canActivate: [StudentGuard],
          data: { allowedRoles: ['STUDENT'], title: 'Student' },
        }
      ],
    },
  ];
}
