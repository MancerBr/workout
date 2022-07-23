import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { take } from 'rxjs/operators';
import { ModalController, NavController } from '@ionic/angular';
import { AuthFormErrorService, IAuthFormError } from '../shared/services/auth-form-error.service';
import { WarningModalComponent } from '../shared/components/warning-modal/warning-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.component.scss'],
})
export class LoginComponent implements IAuthFormError {

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly navController: NavController,
    private readonly authFormErrorService: AuthFormErrorService,
    private readonly modalCtrl: ModalController,
  ) { }

  public get countFormErrors(): number {
    return this.authFormErrorService.countFormErrors(this.form);
  }

  public get isFormErrors(): boolean {
    return this.authFormErrorService.isFormErrors(this.form);
  }

  public isInvalid(formControlName: 'email' | 'password' | 'confirmPassword'): boolean {
    return this.authFormErrorService.isInvalid(this.form, formControlName);
  }

  public login(): void {
    this.authService.login(
      this.form.value.email,
      this.form.value.password,
    ).pipe(
      take(1),
    ).subscribe(() => {
      this.navController.navigateRoot('');
    });
  }

  public async showWarnings(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: WarningModalComponent,
      cssClass: 'auth-form-warning',
      componentProps: {
        formErrors: this.authFormErrorService.getErrorMessages(this.form),
        countErrors: this.countFormErrors,
      },
    });
    await modal.present();
  }

}
