import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-common-icons',
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
export class CommonIconsComponent {

  @Input() public iconName: string;
  @Input() public width: string;
  @Input() public height: string;
  @Input() public fill: string;

  public get iconLink(): string {
    return `../assets/sprites/symbol/svg/sprite.symbol.svg#${this.iconName}`;
  }

}
