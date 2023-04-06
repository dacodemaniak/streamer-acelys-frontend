import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateModuleComponent } from './pages/create-module/create-module.component';
import { CommonModule } from '@angular/common';
import { UpdateModuleComponent } from './pages/update-module/update-module.component';



@NgModule({
  declarations: [
    CreateModuleComponent,
    UpdateModuleComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class ModulesModule { }
