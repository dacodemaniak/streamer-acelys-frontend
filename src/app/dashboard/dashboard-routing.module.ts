import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from '../course/pages/conceptor/course-list/course-list.component';
import { DashboardComponent } from './dashboard.component';
import { RoleGuard } from './guards/role.guard';
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
      canActivate: [RoleGuard],
      data: { allowedRoles: ['CONCEPTOR', 'MANAGER', 'STUDENT'], title: 'Dashboard', breadcrumb: 'Dashboard' },
      children: [
        {
          path: 'conceptor',
          component: ConceptorComponent,
          canActivate: [RoleGuard],
          data: { allowedRoles: ['CONCEPTOR'], title: 'Dashboard | Conceptor', breadcrumb: 'Conceptor' },
          children: [
            {
              path: 'courses',
              component: CourseListComponent,
              canActivate: [RoleGuard],
              data: { allowedRoles: ['CONCEPTOR'], title: 'Dashboard | Managed my courses', breadcrumb: 'Managed my courses' },
            },
            {
              path: 'media',
              loadChildren: () => import('../medias/medias.module').then((m) => m.MediasModule),
            },
            {
              path: 'module',
              loadChildren: () => import('../modules/modules.module').then((m) => m.ModulesModule),
            },
            // TODO : Mettre les autres routes pour course
            {
              path: 'course',
              loadChildren: () => import('../course/course.module').then((m) => m.CourseModule),
            }
          ]
        },
        {
          path: 'manager',
          component: ManagerComponent,
          // canActivateChild: [RoleGuard],
          data: { allowedRoles: ['MANAGER'], title: 'Dashboard | Manager' },
        },
        {
          path: 'student',
          component: StudentComponent,
          // canActivate: [RoleGuard],
          data: { allowedRoles: ['STUDENT'], title: 'Dashboard | Student' },
        }
      ],
    },
    // { path: '**', redirectTo: '/dashboard' },
  ];
}
