import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export enum ETheme {
  dark = 'dark',
  light = 'light',
}

export const colorTheme = 'color-theme';

@Injectable({ providedIn: 'root' })
export class ThemeSwitcherService {
  private readonly window: Window;

  private renderer2: Renderer2;

  constructor(
    private rendererFactory2: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.renderer2 = this.rendererFactory2.createRenderer(null, null);
    this.window = this.document.defaultView;
  }

  get currentTheme(): ETheme {
    return localStorage.getItem(colorTheme) as ETheme;
  }

  setTheme(theme: ETheme): void {
    this.renderer2.setAttribute(this.document.body, colorTheme, theme);
    localStorage.setItem(colorTheme, theme);
  }

  isDark(): boolean {
    return this.currentTheme === ETheme.dark;
  }

  enableThem(): void {
    const prefersDark = this.window.matchMedia('(prefers-color-scheme: dark)');

    this.renderer2.listen(prefersDark, 'change', (mediaQuery) => {
      const theme = mediaQuery.matches ? ETheme.dark : ETheme.light;
      this.setTheme(theme);
    });

    if (this.currentTheme) {
      this.setTheme(this.currentTheme);
    } else {
      const theme = prefersDark.matches ? ETheme.dark : ETheme.light;
      this.setTheme(theme);
    }
  }
}
