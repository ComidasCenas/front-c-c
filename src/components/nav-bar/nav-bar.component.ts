import { Component, Input } from '@angular/core';

import { MenuConfig } from '../drop-down-menu';

@Component({
  selector: 'cc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent {

  @Input()
  public menuConfig: MenuConfig;

  @Input()
  public logoPath: string;
}
