import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkoutExercisesComponent } from './workout-exercises/workout-exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    WorkoutComponent,
    WorkoutExercisesComponent,
    ExerciseComponent,
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class WorkoutModule {
}
