import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/erros/not-found/not-found.component';
import { AddComponent } from './student/add/add.component';
import { ListComponent } from './student/list/list.component';
import { UpdateComponent } from './student/update/update.component';
import { AuthGuard } from './user/guards/auth.guard';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public static readonly routes: Routes = [
    {
      path: '', // Mean : http://localhost:4200
      redirectTo: 'dashboard', // Redirect to another Route object
      pathMatch: 'full', // Mean Angular read the whole URI instead of first matching occ
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'student/list',
      component: ListComponent,
      /*  canActivate: [
        AuthGuard
      ] */
    },
    {
      path: 'student/add',
      component: AddComponent,
      /*  canActivate: [
        AuthGuard
      ] */
    },
    {
      path: 'student/:id/update', // :id => sera remplacé par l'ID d'un Student à l'exécution
      component: UpdateComponent,
      /*  canActivate: [
        AuthGuard
      ] */
    },
    // {
    //   path: 'course',
    //   loadChildren: () =>
    //     import('./course/course.module').then((m) => m.CourseModule),
    //   canActivate: [AuthGuard]
    // },
    {
      path: 'user',
      loadChildren: () =>
        import('./user/user.module').then((m) => m.UserModule),
    },
    // {
    //   path: 'medias',
    //   loadChildren: () => import('./medias/medias.module').then((m) => m.MediasModule),
    // },
    // {
    //   path: 'modules',
    //   loadChildren: () => import('./modules/modules.module').then((m) => m.ModulesModule),
    // },
    {
      path: '**',
      component: NotFoundComponent,
      pathMatch: 'full'
    },
  ];
}
