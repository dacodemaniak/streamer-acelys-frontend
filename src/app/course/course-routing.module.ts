import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseHandlerComponent } from './course-handler/course-handler.component';
import { ListComponent } from './list/list.component';
import { CourseListComponent } from './pages/conceptor/course-list/course-list.component';

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
    },
    {
      path: 'add',
      component: CourseHandlerComponent,
    },
    {
      path: 'conceptor',
      component: CourseListComponent,
    },
    {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ];
}
