import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[gridTemplate]',
  standalone: true,
})
export class GridTemplateDirective {
  @Input() gridTemplate!: string;
  constructor(public templateRef: TemplateRef<any>) {}
}