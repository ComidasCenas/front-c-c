import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { Option } from './drop-down-option.entities';

@Component({
  selector: 'cc-drop-down-option',
  templateUrl: './drop-down-option.component.html',
  styleUrls: ['./drop-down-option.component.scss']
})
export class DropDownOptionComponent {
  @Input()
  public optionConfig: Option

  @Output()
  public optionSelected: EventEmitter<string> = new EventEmitter<string>();

  private optionClicked() {
    this.optionSelected.emit(this.optionConfig.event);
  }

  private optionEnter(event) {
    if (event.key === 'Enter') {
      this.optionSelected.emit(this.optionConfig.event);
    }
  }
}
