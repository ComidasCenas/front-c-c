import { Component, Input, Output, EventEmitter, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';

import { Option } from './drop-down-option.entities';

@Component({
  selector: 'cc-drop-down-option',
  templateUrl: './drop-down-option.component.html',
  styleUrls: ['./drop-down-option.component.scss']
})
export class DropDownOptionComponent implements AfterViewInit{
  @Input()
  public optionConfig: Option

  @Input()
  public last = false;

  @Output()
  public optionSelected: EventEmitter<string> = new EventEmitter<string>();

  @ViewChildren('optionRef')
  option: QueryList<ElementRef>;

  public posX = 0;
  public posY = 0;

  ngAfterViewInit() {
    this.posX = this.option.first.nativeElement.offsetLeft;
    this.posY = this.option.first.nativeElement.offsetTop;
  }

  private optionClicked() {
    this.optionSelected.emit(this.optionConfig.event);
  }

  private optionEnter(event) {
    if (event.key === 'Enter') {
      this.optionSelected.emit(this.optionConfig.event);
    }
  }
}
