import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkoutHistoryComponent } from './workout-history.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: WorkoutHistoryComponent,
        children: [
          {
            path: 'workout-list',
            component: WorkoutListComponent,
          },
          {
            path: 'workout',
            component: WorkoutComponent,
          },
          {
            path: '', redirectTo: 'workout-list', pathMatch: 'full'
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class WorkoutHistoryRoutingModule { }
