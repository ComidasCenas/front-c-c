import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  OnInit
} from '@angular/core';

import { MenuConfig, MenuInstance } from './drop-down-menu.entities';
import { AddHostDirective } from '../ad-host';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { SubMenuComponent } from './submenu.component';

@Component({
  selector: 'cc-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {
  public menuConfig: MenuConfig = {
    icon: 'assets/images/menu.png',
    tree: {
      main: ['option1', 'option2'],
      option1: ['option11', 'option12'],
      option2: ['option21', 'option22']
    },
    options: {
      option1: {
        icon: 'assets/images/chicken-menu-icon.png',
        text: 'Opcion 1'
      },
      option2: {
        icon: 'assets/images/menu-menu-icon.png',
        text: 'Opcion 2'
      },
      option11: {
        icon: 'assets/images/cross-menu-icon.png',
        text: 'Opcion 11',
        event: 'option11'
      },
      option12: {
        icon: 'assets/images/lens-menu-icon.png',
        text: 'Opcion 12',
        event: 'option12'
      },
      option21: {
        icon: 'assets/images/cross-menu-icon.png',
        text: 'Opcion 21',
        event: 'option21'
      },
      option22: {
        icon: 'assets/images/lens-menu-icon.png',
        text: 'Opcion 22',
        event: 'option22'
      }
    }
  };

  @ViewChild(AddHostDirective, { static: true })
  private addHost: AddHostDirective;

  public matMenu: MatMenu;

  constructor(
    private cfr: ComponentFactoryResolver
  ) {}
  
  ngOnInit() {
    this.matMenu = this.buildOption(this.menuConfig.tree.main);
  }


  private buildOption(menu: string[]): MatMenu {
    const menuInstance: MenuInstance[] = [];

    for (const optKey of menu) {
      let optInstance: MenuInstance = {
        option: this.menuConfig.options[optKey]
      };

      if (this.menuConfig.tree[optKey]) {
        optInstance.subMenu = this.buildOption(this.menuConfig.tree[optKey]);
      }

      menuInstance.push(optInstance);
    }

    const menuComponentFactory = this.cfr.resolveComponentFactory(SubMenuComponent);
    const menuComponentRef = this.addHost.viewContainerRef.createComponent(menuComponentFactory);
    const menuComponentInstance: SubMenuComponent = menuComponentRef.instance;

    menuComponentInstance.menu = menuInstance;

    return menuComponentInstance.matMenu;
  }

}
