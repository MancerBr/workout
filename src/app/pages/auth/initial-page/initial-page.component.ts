import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss', '../auth.component.scss'],
})
export class InitialPageComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  navigate(page: string): void {
    this.navController.navigateForward(page);
  }

}
