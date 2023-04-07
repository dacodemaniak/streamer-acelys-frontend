import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppInitializerService, appInitializer } from './services/app-initializer.service';
import { authInterceptor } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,


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
    appInitializer,
    authInterceptor
  ]
})
export class CoreModule { }
