import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouterModule } from './home-router.module';
import { HomeComponent } from './home.component';
import { PresentationModule } from '../../presentation';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRouterModule,
    PresentationModule
  ],
})
export class HomeModule {}