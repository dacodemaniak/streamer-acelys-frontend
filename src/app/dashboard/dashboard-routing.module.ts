import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [[RouterModule.forChild(DashboardRoutingModule.routes)]],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ];
}
