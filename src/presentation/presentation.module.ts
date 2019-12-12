import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationComponent } from './container';
import { ComponentsModule } from '../components';

@NgModule({
  declarations: [ PresentationComponent ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [ PresentationComponent ],
})
export class PresentationModule {}