import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediasRoutingModule } from './medias-routing.module';
import { CreateMediaComponent } from './create-media/create-media.component';
import { UpdateMediaComponent } from './update-media/update-media.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateMediaComponent,
    UpdateMediaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MediasRoutingModule
  ]
})
export class MediasModule { }
