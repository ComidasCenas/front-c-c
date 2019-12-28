import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownMenuComponent } from './drop-down-menu';
import { DropDownOptionComponent } from './drop-down-option';
import { SubmenuComponent } from './submenu';
import { MenuComponent } from './menu';
import { NavbarComponent } from './nav-bar';

const components = [
  DropDownMenuComponent,
  DropDownOptionComponent,
  SubmenuComponent,
  MenuComponent,
  NavbarComponent
]

@NgModule({
  declarations: [ ...components ],
  imports: [ CommonModule ],
  exports: [ ...components ]
})
export class ComponentsModule {}