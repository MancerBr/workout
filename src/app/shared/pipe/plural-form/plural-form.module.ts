import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluralFormPipe } from './plural-form.pipe';

@NgModule({
  declarations: [PluralFormPipe],
  imports: [
    CommonModule
  ],
  exports: [PluralFormPipe],
})
export class PluralFormModule { }
