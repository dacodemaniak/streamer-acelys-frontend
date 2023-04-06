import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppInitializerService, appInitializer } from './services/app-initializer.service';
import { UserMenuComponent } from './components/user-menu/user-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserMenuComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AppInitializerService,
    appInitializer
  ]
})
export class CoreModule { }
