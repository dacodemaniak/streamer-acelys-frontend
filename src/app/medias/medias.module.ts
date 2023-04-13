import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CreateMediaComponent } from './create-media/create-media.component';
import { MediasRoutingModule } from './medias-routing.module';
import { UpdateMediaComponent } from './update-media/update-media.component';
import { ListMediaComponent } from './list-media/list-media.component';



@NgModule({
  declarations: [
    CreateMediaComponent,
    UpdateMediaComponent,
    ListMediaComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MediasRoutingModule
  ]
})
export class MediasModule { }
