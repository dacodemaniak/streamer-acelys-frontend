import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMediaComponent } from './create-media/create-media.component';
import { UpdateMediaComponent } from './update-media/update-media.component';


@NgModule({
  imports: [RouterModule.forChild(MediasRoutingModule.routes)],
  exports: [RouterModule]
})
export class MediasRoutingModule {
  public static routes: Routes = [
    // {
    //   path: '',
    //   redirectTo: 'medias/add',
    //   pathMatch: 'full'
    // },
    {
      path: 'add',
      component: CreateMediaComponent,
      data: { title: 'Dashboard | Add Media', breadcrumb: 'Create Media' },
    },
    {
      path: 'update',
      component: UpdateMediaComponent,
      data: { title: 'Dashboard | Update Media', breadcrumb: 'Update Media' },
    },
    // {
    //   path: '**',
    //   redirectTo: 'medias/add',
    //   pathMatch: 'full'
    // }
  ]
}
