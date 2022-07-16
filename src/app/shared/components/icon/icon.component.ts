import { Component, Input, OnInit } from '@angular/core';

export enum EIconType {
  ionIcon = 'ion-icon',
  icoMoon = 'icomoon',
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() name: string;
  @Input() type: EIconType;

  public readonly iconType = EIconType;

  ngOnInit(): void {}
}
