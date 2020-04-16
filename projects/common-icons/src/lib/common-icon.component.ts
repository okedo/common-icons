import { Component, Input } from '@angular/core';

import { CommonIcon } from './common-icons-names';

@Component({
  selector: 'common-icon',
  template: `
  <svg
    [style.fill]="fill"
    [style.width]="width"
    [style.height]="height"
    class="inline-svg"
  >
      <use [attr.xlink:href]="iconLink"></use>
  </svg>
  `,
  styles: []
})
export class CommonIconComponent {
  @Input() public iconName: CommonIcon;
  @Input() public width: string;
  @Input() public height: string;
  @Input() public fill: string;

  public get iconLink(): string {
    return `../assets/sprites/symbol/svg/sprite.symbol.svg#${this.iconName}`;
  }
}
