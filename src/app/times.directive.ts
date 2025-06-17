import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true
})
export class TimesDirective {

  // Injects the container where views will be added and the template to repeat
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  /**
   * Repeats the host element 'times' times.
   * Example: <div *appTimes="3">Hi</div> will render three <div>Hi</div>
   */
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear(); // Remove any previously rendered views
    for (let i = 0; i < times; i++) {
      // Add a new instance of the template for each iteration
      this.viewContainer.createEmbeddedView(this.templateRef, { });
    }
  }

}
