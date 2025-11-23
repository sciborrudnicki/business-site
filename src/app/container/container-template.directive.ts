import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[containerTemplate]',
  standalone: true,
})
export class ContainerTemplateDirective {
  @Input() containerTemplate!: string;
  constructor(public templateRef: TemplateRef<any>) {}
}