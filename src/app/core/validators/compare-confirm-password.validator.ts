import { FormGroup } from '@angular/forms';

export class CompareConfirmPasswordValidator {
  static compare(formGroup: FormGroup) {
    const password = formGroup?.controls?.password?.value;
    const confirmPassword = formGroup?.controls?.confirmPassword?.value;
    return password === confirmPassword ? null : {passwordCompareError: true};
  }
}
