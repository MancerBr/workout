import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [ItemComponent],
})
export class ItemModule { }
