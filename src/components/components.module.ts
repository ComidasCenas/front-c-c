import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownMenuComponent } from './drop-down-menu';
import { DropDownOptionComponent } from './drop-down-option';
import { SubmenuComponent } from './submenu';
import { MenuComponent } from './menu';

const components = [
  DropDownMenuComponent,
  DropDownOptionComponent,
  SubmenuComponent,
  MenuComponent
]

@NgModule({
  declarations: [ ...components ],
  imports: [ CommonModule ],
  exports: [ ...components ]
})
export class ComponentsModule {}