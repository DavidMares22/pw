import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {

  constructor(private element : ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'lightblue';
   }



}
