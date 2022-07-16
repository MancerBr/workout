import { EIconType } from '../../../icon/icon.component';

export class ItemIconModel {
  public readonly name: string;
  public readonly type: EIconType;
  constructor(name: string, type: EIconType) {
    this.name = name;
    this.type = type;
  }
}
