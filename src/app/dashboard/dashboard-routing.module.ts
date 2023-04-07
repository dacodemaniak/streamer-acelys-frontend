import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
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
      canActivate: [AuthGuard],
      children: [
        {
          path: 'conceptor',
          component: ConceptorComponent,
          data: { roles: ['CONCEPTOR'], title: "Conceptor" }
        },
        {
          path: 'manager',
          component: ManagerComponent,
          data: { roles: ['MANAGER'], title: "Manager" }
        },
        {
          path: 'student',
          component: StudentComponent,
          data: { roles: ['STUDENT'], title: "Student" }
        },
      ]
    },
    {
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ];
}
