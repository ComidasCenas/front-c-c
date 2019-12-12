import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { DropDownMenuComponent } from './drop-down-menu';

@NgModule({
  declarations: [ DropDownMenuComponent ],
  imports: [ CommonModule, MatMenuModule ],
  exports: [ DropDownMenuComponent ],
})
export class ComponentsModule {}