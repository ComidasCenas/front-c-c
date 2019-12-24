import { Component, Input, Output, EventEmitter, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';

import { Option } from './drop-down-option.entities';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'cc-drop-down-option',
  templateUrl: './drop-down-option.component.html',
  styleUrls: ['./drop-down-option.component.scss'],
  animations: [
    trigger('openCloseSubMenu',[
      transition(':enter', [
        style({ opacity: 0 }),
				animate('1s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave',[
        style({ opacity: 1 }),
				animate('1s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DropDownOptionComponent implements AfterViewInit{
  @Input()
  public optionConfig: Option

  @Input()
  public last = false;

  @Input()
  public isSubmenuOpen = false;

  @Output()
  public optionSelected: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public optionFocus: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public setFocusNext: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public setFocusPrev: EventEmitter<string> = new EventEmitter<string>();

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

  private optionKeyUp(event) {
    switch(event.key) {
      case 'ArrowDown':
        this.setFocusNext.emit(this.optionConfig.event);
        break;
      case 'ArrowUp':
        this.setFocusPrev.emit(this.optionConfig.event);
        break;
      case 'Enter':
        if (!this.optionConfig.subMenu) {
          this.optionSelected.emit(this.optionConfig.event);
        }
        break;
    }
  }

  public subMenuEmit(event) {
    this.isSubmenuOpen = false;
    this.optionSelected.emit(event);
  }

  public onFocusEvent() {
    this.isSubmenuOpen = true;
    this.optionFocus.emit(this.optionConfig.event);
  }

  public setFocus() {
    this.option.first.nativeElement.focus();
  }
}
