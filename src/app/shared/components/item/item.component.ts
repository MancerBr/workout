import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ItemIconModel } from './shared/models/item-icon.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() text: string;
  @Input() icon: ItemIconModel;

  @Output() clickOnElement: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
