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
      component: CreateMediaComponent
    },
    {
      path: 'update',
      component: UpdateMediaComponent
    },
    // {
    //   path: '**',
    //   redirectTo: 'medias/add',
    //   pathMatch: 'full'
    // }
  ]
}
