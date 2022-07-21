import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { take } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth.service';
import { CompareConfirmPasswordValidator } from '../../../core/validators/compare-confirm-password.validator';
import { AuthFormErrorService, IAuthFormError } from '../shared/services/auth-form-error.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements IAuthFormError {

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(''),
  }, {
    validators: [CompareConfirmPasswordValidator.compare],
  });
  public formErrors = new Map<string, Array<string>>();

  constructor(
    private readonly authService: AuthService,
    private readonly navController: NavController,
    private readonly authFormErrorService: AuthFormErrorService,
  ) {
  }

  public get countFormErrors(): number {
    return this.authFormErrorService.countFormErrors(this.form);
  }

  public get isFormErrors(): boolean {
    return this.authFormErrorService.isFormErrors(this.form);
  }

  public isInvalid(formControlName: 'email' | 'password' | 'confirmPassword'): boolean {
    return this.authFormErrorService.isInvalid(this.form, formControlName);
  }

  public register(): void {
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
