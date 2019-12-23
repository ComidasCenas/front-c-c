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

  @Output()
  public optionEmit: EventEmitter<string> = new EventEmitter<string>();

  public _posX = 0;
  public heightCalculated = 0;


  ngOnInit() {
    const leng = this.subMenuOptions.length;
    this.heightCalculated = 40 * leng;
  }

   ngAfterViewInit() {
    this.optionComponents.forEach(
      (option: DropDownOptionComponent, index: number, listOptions: DropDownOptionComponent[]) => {
        const subscriptionNext = option.setFocusNext.subscribe(
          () => { 
            const iOpt = index + 1;
            const leng = listOptions.length;

            if (iOpt < leng) {
              this.setFocusOnOption(listOptions[iOpt]);
            }
          }
        );

        const subcriptionPrev = option.setFocusPrev.subscribe(
          () => {
            const iOpt = index - 1;
            
            if (iOpt > -1) {
              this.setFocusOnOption(listOptions[iOpt]);
            }
          }
        )

        this.optionsSubscriptions.push(subscriptionNext);
        this.optionsSubscriptions.push(subcriptionPrev);
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

}
