import { Component, OnInit } from '@angular/core';

import { exercises } from '../../../core/api-mock.data';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-workout-exercises',
  templateUrl: './workout-exercises.component.html',
  styleUrls: ['./workout-exercises.component.scss'],
})
export class WorkoutExercisesComponent implements OnInit {

  exercises = exercises;

  constructor(
    private navController: NavController,
  ) { }

  ngOnInit() {}

  navigate(id: number): void {
    this.navController.navigateForward(`workout/workout-exercises/${id}`);
  }

}
