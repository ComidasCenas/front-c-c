import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cc-add-host]',
})
export class AddHostDirective { 
  constructor( public viewContainerRef: ViewContainerRef) {}
}