import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss'],
})
export class WarningModalComponent {

  public formErrors: Map<string, Array<string>>;

  constructor(private readonly modalCtrl: ModalController) {}

  close(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'close');
  }
}
