import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { ThemeSwitcherService } from './core/services/ theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private themeSwitcherService: ThemeSwitcherService,
    private statusBar: StatusBar,
  ) {}

  ngOnInit(): void {
    this.themeSwitcherService.enableThem();
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#3C2663');
  }
}
