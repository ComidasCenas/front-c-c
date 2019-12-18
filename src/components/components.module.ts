import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import {
  DropDownMenuComponent,
  DropDownOptionComponent,
  SubMenuComponent
} from './drop-down-menu';
import { AddHostDirective } from './ad-host';

@NgModule({
  declarations: [
    DropDownMenuComponent,
    AddHostDirective,
    DropDownOptionComponent,
    SubMenuComponent
  ],
  imports: [ CommonModule, MatMenuModule ],
  entryComponents: [ DropDownOptionComponent, SubMenuComponent ],
  exports: [ DropDownMenuComponent, AddHostDirective ],
})
export class ComponentsModule {}