import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeSwitcherModule } from './components/theme-switcher/theme-switcher.module';
import { LogoModule } from './components/logo/logo.module';
import { BackButtonModule } from './components/back-button/back-button.module';
import { IconModule } from './components/icon/icon.module';
import { BackgroundModule } from './components/background/background.module';

const MODULES = [
  ThemeSwitcherModule,
  LogoModule,
  BackButtonModule,
  TranslateModule,
  IconModule,
  BackgroundModule,
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
