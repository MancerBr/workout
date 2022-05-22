import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        children: [
          {
            path: 'profile',
            component: UserProfileComponent,
          },
          {
            path: '', redirectTo: 'profile', pathMatch: 'full'
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
