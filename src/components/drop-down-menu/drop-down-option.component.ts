import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Option } from './drop-down-menu.entities';

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
  public subMenu = false;

  constructor() { }

  ngOnInit() {}
}
