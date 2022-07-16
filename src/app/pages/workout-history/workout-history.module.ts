import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutHistoryRoutingModule } from './workout-history-routing.module';
import { WorkoutHistoryComponent } from './workout-history.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';



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
    SharedModule,
  ]
})
export class WorkoutHistoryModule { }
