import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeSwitcherModule } from './components/theme-switcher/theme-switcher.module';
import { LogoModule } from './components/logo/logo.module';
import { BackButtonModule } from './components/back-button/back-button.module';
import { IconModule } from './components/icon/icon.module';
import { BackgroundModule } from './components/background/background.module';
import { ItemModule } from './components/item/item.module';
import { PipeModule } from './pipe/pipe.module';
import { SelectLanguageModule } from './components/select-language/select-language.module';

const modules = [
  ThemeSwitcherModule,
  LogoModule,
  BackButtonModule,
  TranslateModule,
  IconModule,
  BackgroundModule,
  ItemModule,
  PipeModule,
  SelectLanguageModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [...modules],
})
export class SharedModule { }
