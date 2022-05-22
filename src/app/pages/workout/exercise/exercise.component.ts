import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { exercises } from '../../../core/api-mock.data';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  exercise;
  form: FormGroup;
  steps = [
    {
      kg: 10,
      numberOfRepetitions: 10,
      step: 1,
    },
    {
      kg: 12,
      numberOfRepetitions: 10,
      step: 2,
    },
  ];

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      kg: new FormControl(),
      numberOfRepetitions: new FormControl(),
    });
    this.route.params.pipe(
      takeUntil(this.destroy$),
    ).subscribe(params => {
        this.exercise = exercises.find((item) => item.id === +params.id);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addStep(): void {
    const step = this.steps.length + 1;
    this.steps.push({
      step,
      ...this.form.value,
    });
    console.log('>', this.form);
    this.form.reset();
  }

}
