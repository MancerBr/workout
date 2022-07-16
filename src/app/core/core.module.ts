import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { TabsLayoutComponent } from './layouts/tabs-layout/tabs-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    DefaultLayoutComponent,
    TabsLayoutComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
  ],
})
export class CoreModule { }
