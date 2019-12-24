import { Component, Input, OnInit } from '@angular/core';
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
export class DropDownMenuComponent implements OnInit {

  private static OPTION_HEIGHT = 50;

  @Input()
  public config: MenuConfig;

  @Input()
  public menuPosX = 0;

  @Input()
  public menuPosY = 0;

  public menuHeight = 0;
  public menuOpen = false;

  ngOnInit() {
    const numOptions = this.config.options.length;

    this. menuHeight = DropDownMenuComponent.OPTION_HEIGHT * numOptions;
  }
}
