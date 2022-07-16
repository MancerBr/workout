import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { take } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth.service';
import { CompareConfirmPasswordValidator } from '../../../core/validators/compare-confirm-password.validator';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../auth.component.scss'],
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(''),
  }, {
    validators: [CompareConfirmPasswordValidator.compare],
  });

  constructor(
    private readonly authService: AuthService,
    private readonly navController: NavController,
  ) {
  }

  ngOnInit() {
  }

  register(): void {
    this.authService.register(
      this.form.value.email,
      this.form.value.password,
    ).pipe(
      take(1),
    ).subscribe(() => {
      this.navController.navigateRoot('auth/login');
    });
  }
}
