import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AccountComponent, UserProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    IonicModule,
  ]
})
export class AccountModule { }
