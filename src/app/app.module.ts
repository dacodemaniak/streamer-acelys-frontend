import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TileComponent } from './dashboard/components/tile/tile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './dashboard/pages/admin/admin.component';
import { ConceptorComponent } from './dashboard/pages/conceptor/conceptor.component';
import { StudentComponent } from './dashboard/pages/student/student.component';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TileComponent,
    ConceptorComponent,
    StudentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
