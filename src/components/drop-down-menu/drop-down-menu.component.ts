import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuConfig } from './drop-down-menu.entities';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'cc-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss'],
  animations: [
    trigger('openCloseMenu', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1}))
      ]),
      transition(':leave',[
        style({ opacity: 1}),
        animate('0.3s ease-in', style({ opacity: 0}))
      ])
    ])
  ]
})
export class DropDownMenuComponent {

  private static OPTION_HEIGHT = 50;

  @Input()
  public config: MenuConfig;

  @Output()
  public optionSelected: EventEmitter<string> = new EventEmitter<string>();

  public menuOpen = false;
  public index = -1;

  public onOptionSelected(event) {
    this.menuOpen = false;
    this.optionSelected.emit(event);
  }

  public onMouseLeave() {
    this.menuOpen = false;
  }

  public setFocusOption(event) {
    if (event.key === 'ArrowDown') {
      this.index = 0;
    }
  }
}
