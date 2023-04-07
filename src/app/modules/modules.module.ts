import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { UpdateModuleComponent } from './pages/update-module/update-module.component';
import { AddMediaComponent } from './pages/medias-management/add-media/add-media.component';
import { CreateMediaComponent } from './pages/medias-management/create-media/create-media.component';
import { CreateModuleComponent } from './pages/create-module/create-module.component';
import { SearchBarComponent } from './pages/medias-management/search-bar/search-bar.component';



@NgModule({
  declarations: [
    CreateModuleComponent,
    UpdateModuleComponent,
    CreateMediaComponent,
    AddMediaComponent,
    SearchBarComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class ModulesModule { }
