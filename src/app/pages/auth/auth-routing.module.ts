import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'registration',
            component: RegistrationComponent,
          },
          {
            path: '', redirectTo: 'login', pathMatch: 'full'
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
