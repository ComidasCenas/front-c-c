import { Component, Input, OnInit } from '@angular/core';

import { Option } from '../drop-down-option';

@Component({
  selector: 'cc-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  
  private static WIDTH = 125;
  private static MENU_PADDING = 11;
  private static SUBMENU_PADDING = (14 + 16);

  @Input()
  public subMenuOptions: Option[];

  @Input()
  set posX(x) {
    this._posX = x - (SubmenuComponent.WIDTH + SubmenuComponent.MENU_PADDING + SubmenuComponent.SUBMENU_PADDING);
  };

  @Input()
  public posY = 0;

  public _posX = 0;
  public heightCalculated = 0;


  ngOnInit() {
    const leng = this.subMenuOptions.length;
    this.heightCalculated = 40 * leng;
  }

}
