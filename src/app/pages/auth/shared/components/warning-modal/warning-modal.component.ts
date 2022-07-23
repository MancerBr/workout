import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TFormErrorMessage } from '../../types';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss'],
})
export class WarningModalComponent {

  public formErrors: TFormErrorMessage;
  public countErrors: number;

  constructor(private readonly modalCtrl: ModalController) {}

  close(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'close');
  }
}
