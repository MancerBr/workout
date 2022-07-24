import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectLanguageComponent } from './select-language.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SelectLanguageComponent],
  imports: [CommonModule, IonicModule, TranslateModule],
  exports: [SelectLanguageComponent],
})
export class SelectLanguageModule { }
