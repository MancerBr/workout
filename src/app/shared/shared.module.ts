import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeSwitcherModule } from './components/theme-switcher/theme-switcher.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThemeSwitcherModule,
  ],
  exports: [ThemeSwitcherModule],
})
export class SharedModule { }
