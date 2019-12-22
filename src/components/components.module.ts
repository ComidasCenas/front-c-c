import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownMenuComponent } from './drop-down-menu';
import { DropDownOptionComponent } from './drop-down-option';
import { SubmenuComponent } from './submenu';

const components = [
  DropDownMenuComponent,
  DropDownOptionComponent,
  SubmenuComponent
]

@NgModule({
  declarations: [ ...components ],
  imports: [ CommonModule ],
  exports: [ ...components ]
})
export class ComponentsModule {}