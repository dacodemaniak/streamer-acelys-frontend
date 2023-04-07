import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from '../course/pages/conceptor/course-list/course-list.component';
import { AuthGuard } from '../user/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { ConceptorGuard } from './guards/conceptor.guard';

@NgModule({
  imports: [[RouterModule.forChild(DashboardRoutingModule.routes)]],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      pathMatch: 'full',
    },
    // add a course page base on the role of the member
    {
      path: 'courses',
      component: CourseListComponent,
      canActivate: [AuthGuard, ConceptorGuard],
      data: {
        role: ['CONCEPTOR'],
        title: 'Courses',
      }
    },
    {
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ];
}
