import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluralFormModule } from './plural-form/plural-form.module';

const modules = [PluralFormModule];

@NgModule({
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})
export class PipeModule { }
