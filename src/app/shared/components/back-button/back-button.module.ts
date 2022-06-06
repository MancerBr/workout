import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button.component';
import { IonicModule } from '@ionic/angular';

const COMPONENTS = [BackButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [...COMPONENTS],
})
export class BackButtonModule { }
