import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getFormErrors } from '../../../../shared/utils/get-form-errors.util';
import { errorMessage } from '../constants/error-message.constants';
import { TFormError, TFormErrorMessage } from '../types';

export interface IAuthFormError {
  get countFormErrors(): number;
  get isFormErrors(): boolean;
  isInvalid(formControlName: 'email' | 'password' | 'confirmPassword'): boolean;
}

export interface IAuthFormErrorMessage {
  get getErrorMessages(): TFormErrorMessage;
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

  public getErrorMessages(form: FormGroup): TFormErrorMessage {
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

  private checkFormErrors(form: FormGroup): TFormErrorMessage {
    const formErrors = new Map<string, Array<TFormError>>([
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
