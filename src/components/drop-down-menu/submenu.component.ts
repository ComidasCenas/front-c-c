import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { AddHostDirective } from '../ad-host';
import { DropDownOptionComponent } from './drop-down-option.component';
import { MatMenu } from '@angular/material/menu';
import { MenuInstance } from './drop-down-menu.entities';

@Component({
  selector: 'cc-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubMenuComponent implements OnInit {
  
  @Input()
  public menu: MenuInstance[];

  @ViewChild(AddHostDirective, { static: true })
  private addHost: AddHostDirective

  @ViewChild(MatMenu, { static: true })
  public matMenu: MatMenu

  constructor(
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit(): void { 
    const leng = this.menu.length;

    for (let i = 0; i < leng; i++) {
      const optionFactory = this.cfr.resolveComponentFactory(DropDownOptionComponent);
      const optionRef = this.addHost.viewContainerRef.createComponent(optionFactory);
      const optionInstance: DropDownOptionComponent = optionRef.instance;

      optionInstance.optionConfig = this.menu[i].option;
      optionInstance.last = (i === (leng - 1));

      if (this.menu[i].subMenu) {
        optionInstance.subMatMenu = this.menu[i].subMenu;
      }
    }
  }
}
