import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [IconComponent],
  exports: [
    IconComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class IconModule { }
