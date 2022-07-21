import { FormGroup, ValidationErrors } from '@angular/forms';

export const getFormErrors = (form: FormGroup): Map<string, Set<string>> => {
  const errors = new Map<string, Set<string>>();
  const mainErrors = form?.errors ? Object.keys(form.errors) : [];

  if (mainErrors.length) {
    errors.set('mainErrors', new Set(mainErrors));
  }

  Object.keys(form.controls).forEach((controlName: string) => {
    const controlErrors: ValidationErrors = form.get(controlName).errors;

    if (controlErrors != null) {
      Object.keys(controlErrors).forEach((keyError: string) => {
        errors.set(
          controlName,
          errors.get(controlName) ? errors.get(controlName).add(keyError) : new Set([keyError]),
        );
      });
    }

  });

  return errors;
};
