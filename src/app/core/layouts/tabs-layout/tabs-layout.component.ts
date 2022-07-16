import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { EIconType } from '../../../shared/components/icon/icon.component';


@Component({
  selector: 'app-tabs-layout',
  templateUrl: './tabs-layout.component.html',
  styleUrls: ['./tabs-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsLayoutComponent implements OnInit, OnDestroy {
  public url: string;
  public readonly tabs = [
    {
      icon: {
        name: 'icon-user',
        type: EIconType.icoMoon,
      },
      route: 'account/profile',
    },
    {
      icon: {
        name: 'icon-dumbbell',
        type: EIconType.icoMoon,
      },
      class: 'dumbbell',
      route: 'workout/workout-exercises',
    },
    {
      icon: {
        name: 'icon-clipboard-text-clock',
        type: EIconType.icoMoon,
      },
      route: 'workout-history/workout-list',
    },
    {
      icon: {
        name: 'icon-plus',
        type: EIconType.icoMoon,
      },
      route: '',
    },
  ];

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntil(this.destroy$),
    ).subscribe((event: NavigationEnd) => {
      this.url = event.url;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isActive(url: string): boolean {
    return this.url === `/${url}`;
  }
}
