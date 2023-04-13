import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMediaComponent } from './create-media/create-media.component';
import { ListMediaComponent } from './list-media/list-media.component';
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
    {
      path: 'list',
      component: ListMediaComponent,
      data: { title: 'Dashboard | Managed My Media', breadcrumb: 'Managed Medias' },
    },
    // {
    //   path: '**',
    //   redirectTo: 'medias/add',
    //   pathMatch: 'full'
    // }
  ]
}
