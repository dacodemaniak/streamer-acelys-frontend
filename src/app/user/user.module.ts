import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RecoveryComponent } from './dialogs/recovery/recovery.component';
import { RecoveryPasswordComponent } from './dialogs/recovery-password/recovery-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecoveryComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
