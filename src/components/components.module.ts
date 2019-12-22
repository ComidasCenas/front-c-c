import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownMenuComponent } from './drop-down-menu';
import { DropDownOptionComponent } from './drop-down-option';

@NgModule({
  declarations: [ DropDownMenuComponent, DropDownOptionComponent ],
  imports: [ CommonModule ],
  exports: [ DropDownMenuComponent, DropDownOptionComponent ]
})
export class ComponentsModule {}