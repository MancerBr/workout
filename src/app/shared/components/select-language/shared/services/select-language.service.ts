import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { languages } from '../constants/languages.constant';
import { ELanguage, EShortLanguage } from '../enums';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectLanguageService {
  private readonly languages = languages;
  private readonly localStorageKey = 'app_language';
  private readonly changeLanguage$: Subject<void> = new Subject<void>();
  constructor(private translateService: TranslateService) { }

  public get getCurrentLanguage(): { shortText: EShortLanguage; text: ELanguage } {
    const shortText = localStorage.getItem(this.localStorageKey) as EShortLanguage || this.getLanguages[0].shortText;
    return this.getLanguages.find(language => language.shortText === shortText);
  }

  public get getLanguages(): typeof languages {
    return this.languages;
  }

  public setLanguage(language: EShortLanguage): void {
    this.translateService.use(language || this.languages[0].shortText);
    localStorage.setItem(this.localStorageKey, language);
    this.changeLanguage$.next();
  }

  public onChange$(): Observable<void> {
    return this.changeLanguage$.asObservable();
  }
}
