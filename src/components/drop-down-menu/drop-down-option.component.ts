import {
  Component,
  Input,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  ViewChild
} from '@angular/core';

import { Option } from './drop-down-menu.entities';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'cc-drop-down-option',
  templateUrl: './drop-down-option.component.html',
  styleUrls: ['./drop-down-option.component.scss']
})
export class DropDownOptionComponent implements OnInit {
  @Input()
  public optionConfig: Option;

  @Input()
  public last = false;

  @Input()
  public subMatMenu: MatMenu;

  @ViewChild(MatMenuTrigger, { static: true})
  private menuTrigger: MatMenuTrigger

  constructor() { }

  ngOnInit() {
    if (this.menuTrigger) {
      this.menuTrigger.menu = this.subMatMenu;
    }
  }
}
