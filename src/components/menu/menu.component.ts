import { Component, Input, ViewChildren, QueryList, Output, EventEmitter, ElementRef, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Option, DropDownOptionComponent } from '../drop-down-option';

@Component({
  selector: 'cc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private static OPTION_HEIGHT = 50;

  @Input()
  public options: Option[];

  @Input()
  set focusOption(index) {
    if (this.optionsComponent) {
      const optionsArray = this.optionsComponent.toArray();
      const leng = optionsArray.length;
  
      if ((index > -1) && (index < leng)) {
        this.index = index;
        optionsArray[index].setFocus();
      }
    }
  }

  @Output()
  public optionSelected: EventEmitter<string> = new EventEmitter<string>();

  public menuHeight = 0;
  public menuPosX = 0;
  public menuPosY = 0;

  private index = 0;

  @ViewChildren(DropDownOptionComponent)
  private optionsComponent: QueryList<DropDownOptionComponent>;

  @ViewChild('menuFrame', {static: true})
  private menuFrame: ElementRef;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const numOptions = this.options.length;
    const posX = this.el.nativeElement.parentNode.offsetLeft;
    const parentWidth = this.el.nativeElement.parentNode.offsetWidth;
    const elWidth = this.menuFrame.nativeElement.offsetWidth;
    const elPaddingLeft = this.menuFrame.nativeElement.paddingLeft || 0;
    const elPaddingRight = this.menuFrame.nativeElement.paddingRight || 0;
    const posY = this.el.nativeElement.parentNode.offsetTop;
    const parentHeight = this.el.nativeElement.parentNode.offsetHeight;
    const parentPaddingTop = this.el.nativeElement.parentNode.style.paddingTop || 0;
    const parentPaddingBottom = this.el.nativeElement.parentNode.style.paddingBottom || 0;

    this.menuPosX = (posX + parentWidth) - (elWidth + elPaddingRight + elPaddingLeft);
    this.menuPosY = (posY + parentHeight) - (parentPaddingTop + parentPaddingBottom);
    this.menuHeight = MenuComponent.OPTION_HEIGHT * numOptions;
  }

  public closeMenus(index) {
    const optionsArray = this.optionsComponent.toArray()
    const leng = optionsArray.length;

    for (let i = 0; i < leng; i++) {
      if (i!== index) {
        optionsArray[i].isSubmenuOpen=false
      }
    }
  }

  public onOptionSelected(event) {
    this.optionSelected.emit(event);
  }

  public onSetFocusNext() {
    const optionsArray = this.optionsComponent.toArray();
    const leng = optionsArray.length;
    const iOpt = Math.abs(++this.index % leng);

    console.log('iOpt: ', iOpt);
    optionsArray[iOpt].setFocus();

  }

  public onSetFocusPrev() {
    const optionsArray = this.optionsComponent.toArray();
    const leng = optionsArray.length;
    const iOpt = Math.abs(--this.index % leng);

    optionsArray[iOpt].setFocus();
  }
}
