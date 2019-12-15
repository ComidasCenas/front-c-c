import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  OnInit
} from '@angular/core';

import { Option, MenuConfig } from './drop-down-menu.entities';
import { DropDownOptionComponent } from './drop-down-option.component';
import { AddHostDirective } from '../ad-host';

@Component({
  selector: 'cc-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {
  public menuConfig: MenuConfig = {
    id: 'menu',
    icon: 'assets/images/menu.png',
    options: [
      {
        id: 'option1',
        icon: 'assets/images/chicken-menu-icon.png',
        text: 'Opcion 1',
        options: [
          {
            id: 'option11',
            icon: 'assets/images/cross-menu-icon.png',
            text: 'Opcion 11'
          },
          {
            id: 'options12',
            icon: 'assets/images/lens-menu-icon.png',
            text: 'Opcion 12'
          }
        ]
      },
      {
        id: 'option2',
        icon: 'assets/images/menu-menu-icon.png',
        text: 'Opcion 2',
        options: [
          {
            id: 'option21',
            icon: 'assets/images/cross-menu-icon.png',
            text: 'Opcion 21'
          },
          {
            id: 'option22',
            icon: 'assets/images/lens-menu-icon.png',
            text: 'Opcion 22'
          }
        ]
      }
    ]
  }; 

  @ViewChild(AddHostDirective, { static: true })
  private optionsContainer: AddHostDirective;

  constructor(
    private cfr: ComponentFactoryResolver
  ) {}
  
  ngOnInit() {
    this.buildOption();
  }

  private buildOption() {
    const optionFactory = this.cfr.resolveComponentFactory(DropDownOptionComponent);
    const leng = this.menuConfig.options.length;
    this.optionsContainer.viewContainerRef.clear();
    
    for (let i=0; i < leng; i++) {
      const componentRef = this.optionsContainer.viewContainerRef.createComponent(optionFactory);
      (<DropDownOptionComponent> componentRef.instance).optionConfig = this.menuConfig.options[i];
      (<DropDownOptionComponent> componentRef.instance).last = (i === leng - 1);
    }
  }

}
