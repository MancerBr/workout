import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../../shared/shared.module';
import { InitialPageComponent } from './initial-page/initial-page.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    InitialPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    SharedModule,
  ]
})
export class AuthModule { }
