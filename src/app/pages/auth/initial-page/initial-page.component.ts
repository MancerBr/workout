import { AfterViewInit, Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss', '../auth.component.scss'],
})
export class InitialPageComponent implements AfterViewInit {

  constructor(
    private navController: NavController,
  ) { }

  ngAfterViewInit(): void {
    SplashScreen.hide();
  }

  navigate(page: string): void {
    this.navController.navigateForward(page);
  }

}
