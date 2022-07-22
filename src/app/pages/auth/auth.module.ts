import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../../shared/shared.module';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { WarningModalComponent } from './shared/components/warning-modal/warning-modal.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    InitialPageComponent,
    WarningModalComponent,
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        IonicModule,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class AuthModule { }
