import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.component.scss'],
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly authService: AuthService,
    private navController: NavController,
  ) { }

  ngOnInit() {}

  login(): void {
    console.log(this.form);
    this.authService.login(
      this.form.value.email,
      this.form.value.password,
    ).pipe(
      take(1),
    ).subscribe(() => {
      this.navController.navigateRoot('');
    });
  }

}
