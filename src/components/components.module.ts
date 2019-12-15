import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import {
  DropDownMenuComponent,
  DropDownOptionComponent
} from './drop-down-menu';
import { AddHostDirective } from './ad-host';

@NgModule({
  declarations: [ DropDownMenuComponent, AddHostDirective, DropDownOptionComponent ],
  imports: [ CommonModule, MatMenuModule ],
  entryComponents: [ DropDownOptionComponent ],
  exports: [ DropDownMenuComponent, AddHostDirective ],
})
export class ComponentsModule {}