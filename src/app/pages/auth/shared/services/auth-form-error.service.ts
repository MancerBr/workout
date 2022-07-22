import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getFormErrors } from '../../../../shared/utils/get-form-errors.util';
import { errorMessage } from '../constants/error-message.constants';

export interface IAuthFormError {
  get countFormErrors(): number;
  get isFormErrors(): boolean;
  isInvalid(formControlName: 'email' | 'password' | 'confirmPassword'): boolean;
}

export interface IAuthFormErrorMessage {
  get getErrorMessages(): Map<string, Array<string>>;
}

@Injectable({ providedIn: 'root' })
export class AuthFormErrorService {

  public countFormErrors(form: FormGroup): number {
    const formErrors = this.checkFormErrors(form);
    let count = 0;
    for (const [key, value] of formErrors) {
      count += value?.length || 0;
    }
    return count;
  }

  public getErrorMessages(form: FormGroup): Map<string, Array<string>> {
    return this.checkFormErrors(form);
  }

  public isFormErrors(form: FormGroup): boolean {
    return this.countFormErrors(form) > 0;
  }

  public isInvalid(form: FormGroup, formControlName: 'email' | 'password' | 'confirmPassword'): boolean {
    if (formControlName === 'confirmPassword') {
      return this.isConfirmPasswordInvalid(form);
    }
    return form.controls[formControlName].invalid && form.controls[formControlName].touched;
  }

  private isConfirmPasswordInvalid(form: FormGroup): boolean {
    return Boolean(form.invalid && form.touched && form.errors);
  }

  private checkFormErrors(form: FormGroup): Map<string, Array<string>> {
    const formErrors = new Map<string, Array<string>>([
      ['email', []],
      ['password', []],
    ]);

    if (this.isInvalid(form, 'email')) {
      getFormErrors(form).get('email').forEach((error: string) => {
        const errorMsg = errorMessage.email[error];
        if (errorMsg) {
          formErrors.get('email').push(errorMsg);
        }
      });
    }

    if (this.isInvalid(form, 'password')) {
      getFormErrors(form).get('password').forEach((error: string) => {
        const errorMsg = errorMessage.password[error];
        if (errorMsg) {
          formErrors.get('password').push(errorMsg);
        }
      });
    }

    if (this.isConfirmPasswordInvalid(form)) {
      getFormErrors(form).get('mainErrors').forEach((error: string) => {
        const errorMsg = errorMessage.password[error];
        if (errorMsg) {
          formErrors.get('password').push(errorMsg);
        }
      });
    }

    return formErrors;
  }
}
