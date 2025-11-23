import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[heroTemplate]',
  standalone: true,
})
export class HeroTemplateDirective {
  @Input() heroTemplate!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}