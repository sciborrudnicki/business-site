import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[formTemplate]',
  standalone: true,
})
export class FormTemplateDirective {
  @Input() formTemplate!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}