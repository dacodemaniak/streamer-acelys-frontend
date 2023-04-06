import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TileComponent } from './dashboard/components/tile/tile.component';
import { StudentModule } from './student/student.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ConceptorComponent } from './dashboard/pages/conceptor/conceptor.component';
import { StudentComponent } from './dashboard/pages/student/student.component';
import { AdminComponent } from './dashboard/pages/admin/admin.component';

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
