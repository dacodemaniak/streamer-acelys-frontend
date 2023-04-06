import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateModuleComponent } from './pages/create-module/create-module.component';
import { CommonModule } from '@angular/common';
import { UpdateModuleComponent } from './pages/update-module/update-module.component';
import { AddMediaComponent } from './pages/create-module/add-media/add-media.component';
import { CreateMediaComponent } from './pages/create-module/create-media/create-media.component';



@NgModule({
  declarations: [
    CreateModuleComponent,
    UpdateModuleComponent,
    AddMediaComponent,
    CreateMediaComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class ModulesModule { }
