import { Directive, ElementRef, Input, input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {


  constructor(private element : ElementRef) {
   }
   
  // Sets the background color of the host element whenever the input value changes
   @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
   }



}
