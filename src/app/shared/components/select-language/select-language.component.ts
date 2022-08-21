import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { SelectLanguageService } from './shared/services/select-language.service';
import { EShortLanguage } from './shared/enums';


@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit, OnDestroy {
  @Input() isShort: boolean;

  public currentLanguage = this.selectLanguageService.getCurrentLanguage;

  private readonly languages = this.selectLanguageService.getLanguages;
  private readonly shortLanguages = Object.keys(EShortLanguage);
  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private selectLanguageService: SelectLanguageService,
    private actionSheetController: ActionSheetController,
    private translateService: TranslateService,
  ) {
  }

  public ngOnInit(): void {
    this.selectLanguageService.onChange$().pipe(
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.currentLanguage = this.selectLanguageService.getCurrentLanguage;
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async change(): Promise<void> {
    const buttons = this.languages.map((language, index) => ({
      text: language.text,
      cssClass: this.currentLanguage.shortText === language.shortText ? 'active' : '',
      role: language.shortText,
    }));
    const actionSheet = await this.actionSheetController.create({
      mode: 'ios',
      cssClass: 'custom-app-action-sheet',
      buttons: [
        ...buttons,
        {
          text: await this.translateService.get('CANCEL').toPromise(),
          role: 'cancel',
          cssClass: 'cancel',
        }
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

    if (this.shortLanguages.includes(role)) {
      this.selectLanguageService.setLanguage(role as EShortLanguage);
    }
  }
}
