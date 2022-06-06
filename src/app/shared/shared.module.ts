import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeSwitcherModule } from './components/theme-switcher/theme-switcher.module';
import { LogoModule } from './components/logo/logo.module';
import { BackButtonModule } from './components/back-button/back-button.module';

const MODULES = [
  ThemeSwitcherModule,
  LogoModule,
  BackButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [...MODULES],
})
export class SharedModule { }
