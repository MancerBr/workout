import { Component, OnInit } from '@angular/core';

import { ThemeSwitcherService } from '../../../core/services/ theme-switcher.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {

  constructor(private themeSwitcherService: ThemeSwitcherService) { }

  get isDark(): boolean {
    return this.themeSwitcherService.isDark();
  }

  ngOnInit() {}

  toggle(e): void {
    const theme = e.detail.checked ? 'dark' : 'light';
    this.themeSwitcherService.setTheme(theme);
  }

}
