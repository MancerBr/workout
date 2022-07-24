import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { ItemIconModel } from '../../../shared/components/item/shared/models/item-icon.model';
import { EIconType } from '../../../shared/components/icon/icon.component';
import { exercises } from '../../../core/api-mock.data';

@Component({
  selector: 'app-workout-exercises',
  templateUrl: './workout-exercises.component.html',
  styleUrls: ['./workout-exercises.component.scss'],
})
export class WorkoutExercisesComponent implements OnInit {
  public readonly arrowIcon: ItemIconModel = new ItemIconModel('chevron-forward-circle-sharp', EIconType.ionIcon);
  public readonly exercises = exercises;
  constructor(
    private navController: NavController,
  ) { }

  ngOnInit(): void {}

  navigateToExercise(): void {}

}
