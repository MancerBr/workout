import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

import { AuthService } from '../../auth/shared/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  constructor(
    private authService: AuthService,
    private navController: NavController,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    SplashScreen.hide();
  }

  logout(): void {
    this.authService.logout();
    this.navController.navigateRoot('/auth');
  }

}
