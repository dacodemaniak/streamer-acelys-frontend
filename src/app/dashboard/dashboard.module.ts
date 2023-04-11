import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediasModule } from '../medias/medias.module';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TileComponent } from './components/tile/tile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ConceptorComponent } from './pages/conceptor/conceptor.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { StudentComponent } from './pages/student/student.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ConceptorComponent,
    StudentComponent,
    ManagerComponent,
    TileComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MediasModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
