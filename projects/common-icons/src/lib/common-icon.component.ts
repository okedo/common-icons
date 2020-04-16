import { Component, Input } from '@angular/core';

import { IconNamesHelper } from './common-icons-names';
import { Style } from './style.inteface';

@Component({
  selector: 'common-icon',
  templateUrl: './common-icon.component.html',
  styles: []
})
export class CommonIconComponent {
  @Input() public iconName: string;
  @Input() public style: Style;

  public get inRegistry(): boolean {
    return IconNamesHelper.inList(this.iconName);
  }

  public get iconLink(): string {
    return `../assets/sprites/symbol/svg/sprite.symbol.svg#${this.iconName}`;
  }
}
