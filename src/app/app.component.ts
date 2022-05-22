import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from './core/services/ theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private themeSwitcherService: ThemeSwitcherService) {}

  ngOnInit(): void {
    this.themeSwitcherService.enableThem();
  }
}
