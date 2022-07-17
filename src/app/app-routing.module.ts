import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { SignInGuard } from './core/guards/sign-in.guard';
import { TabsLayoutComponent } from './core/layouts/tabs-layout/tabs-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TabsLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'workout',
        pathMatch: 'full'
      },
      {
        path: 'workout',
        loadChildren: () => import('./pages/workout/workout.module').then(m => m.WorkoutModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
      },
      {
        path: 'workout-history',
        loadChildren: () => import('./pages/workout-history/workout-history.module').then(m => m.WorkoutHistoryModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [SignInGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/auth',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
