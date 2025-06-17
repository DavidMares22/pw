import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  /**
   * Adds/removes classes or sets styles based on the object passed to [appClass].
   * - If the value is boolean, it adds/removes the class.
   * - If the value is a string, it sets the style property.
   */
  @Input('appClass') set propertyNames(params: any) {
    for (const key in params) {
      const value = params[key];
      if (typeof value === 'boolean') {
        if (value) {
          this.element.nativeElement.classList.add(key);
        } else {
          this.element.nativeElement.classList.remove(key);
        }
      } else if (typeof value === 'string') {
        // Convert camelCase to kebab-case for CSS property
        // const styleKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        this.element.nativeElement.style[key] = value;
      }
    }
  }
}
