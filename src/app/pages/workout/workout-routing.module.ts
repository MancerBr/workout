import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkoutComponent } from './workout.component';
import { WorkoutExercisesComponent } from './workout-exercises/workout-exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: WorkoutComponent,
        children: [
          {
            path: 'workout-exercises',
            component: WorkoutExercisesComponent,
          },
          {
            path: 'workout-exercises/:id',
            component: ExerciseComponent,
          },
          {
            path: '', redirectTo: 'workout-exercises', pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class WorkoutRoutingModule { }
