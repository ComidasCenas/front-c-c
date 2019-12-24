import { Component, Input, OnInit } from '@angular/core';
import { MenuConfig } from './drop-down-menu.entities';

@Component({
  selector: 'cc-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {

  private static OPTION_HEIGHT = 50;

  @Input()
  public config: MenuConfig;

  @Input()
  public menuPosX = 0;

  @Input()
  public menuPosY = 0;

  public menuHeight = 0;

  ngOnInit() {
    const numOptions = this.config.options.length;

    this. menuHeight = DropDownMenuComponent.OPTION_HEIGHT * numOptions;
  }
}
