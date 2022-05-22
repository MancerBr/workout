import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutHistoryRoutingModule } from './workout-history-routing.module';
import { WorkoutHistoryComponent } from './workout-history.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    WorkoutHistoryComponent,
    WorkoutComponent,
    WorkoutListComponent,
  ],
  imports: [
    CommonModule,
    WorkoutHistoryRoutingModule,
    IonicModule,
  ]
})
export class WorkoutHistoryModule { }
