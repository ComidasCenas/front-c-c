import { Component, Input, OnInit, ViewChildren, Output, EventEmitter, AfterViewInit, QueryList, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Option, DropDownOptionComponent } from '../drop-down-option';

@Component({
  selector: 'cc-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit, AfterViewInit, OnDestroy {
  
  private static WIDTH = 125;
  private static MENU_PADDING = 11;
  private static SUBMENU_PADDING = (14 + 16);
  private static OPTION_HEIGHT = 50;

  @ViewChildren(DropDownOptionComponent)
  private optionComponents: QueryList<DropDownOptionComponent>;

  private optionsSubscriptions: Subscription[] = [];

  @Input()
  public subMenuOptions: Option[];

  @Input()
  set posX(x) {
    this._posX = x - (SubmenuComponent.WIDTH + SubmenuComponent.MENU_PADDING + SubmenuComponent.SUBMENU_PADDING);
  };

  @Input()
  public posY = 0;

  @Input()
  set setFocus(pos) {
    if (this.optionComponents) {
      const options = this.optionComponents.toArray();
      const leng = options.length;
  
      if ((pos > -1) && (pos < leng)) {
        this.setFocusOnOption(options[pos]);
        this.index = pos;
      } else {
        for(const option of options) {
          option.removeFocus();
        }
      }
    }
  }


  @Output()
  public optionEmit: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public returnFocus: EventEmitter<string> = new EventEmitter<string>();

  public _posX = 0;
  public heightCalculated = 0;

  private index = 0;



  ngOnInit() {
    const leng = this.subMenuOptions.length;
    this.heightCalculated = SubmenuComponent.OPTION_HEIGHT * leng;
  }

   ngAfterViewInit() {
    this.optionComponents.forEach(
      (option: DropDownOptionComponent, index: number, listOptions: DropDownOptionComponent[]) => {
        const subscriptionNext = option.setFocusNext.subscribe(
          () => {
            const leng = listOptions.length;
            this.index = Math.abs((this.index + 1) % leng);

            this.setFocusOnOption(listOptions[this.index]);
          }
        );

        const subcriptionPrev = option.setFocusPrev.subscribe(
          () => {
            const leng = listOptions.length;
            this.index = Math.abs((this.index - 1) % leng);
            
            this.setFocusOnOption(listOptions[this.index]);
          }
        )

        const subcriptionReturnFocus = option.setFocusParent.subscribe(
          (event) => {
            this.returnFocus.emit(event);
          }
        )

        this.optionsSubscriptions.push(subscriptionNext);
        this.optionsSubscriptions.push(subcriptionPrev);
        this.optionsSubscriptions.push(subcriptionReturnFocus);
      }
    )
  }

  ngOnDestroy() {
    for (const subscription of this.optionsSubscriptions) {
      subscription.unsubscribe();
    }
  }

  private setFocusOnOption(option: DropDownOptionComponent) {
    option.setFocus()
  }

  public optionSelected(event) {
    this.optionEmit.emit(event);
  }

  public setIndexFocus(index){
    this.index = index;
  }

}
