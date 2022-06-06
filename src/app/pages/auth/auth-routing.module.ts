import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { InitialPageComponent } from './initial-page/initial-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: '',
            component: InitialPageComponent,
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'registration',
            component: RegistrationComponent,
          },
          {
            path: '', redirectTo: '', pathMatch: 'full'
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
