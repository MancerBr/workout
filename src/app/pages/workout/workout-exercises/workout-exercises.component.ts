import { Component, OnInit } from '@angular/core';

import { exercises } from '../../../core/api-mock.data';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-workout-exercises',
  templateUrl: './workout-exercises.component.html',
  styleUrls: ['./workout-exercises.component.scss'],
})
export class WorkoutExercisesComponent implements OnInit {
  constructor(
    private navController: NavController,
  ) { }

  ngOnInit() {}

}
