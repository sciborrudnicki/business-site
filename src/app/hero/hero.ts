import { AfterContentInit, Component, ContentChildren, input, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeroHeader } from './hero-header/hero-header';
import { HeroDescription } from './hero-description/hero-description';
// Directives
import { HeroTemplateDirective } from './form-template.directive';
// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { ButtonList } from "../button/button-list/button-list";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    // PrimeNG modules
    ButtonModule,

    // Hero components
    HeroHeader,
    HeroDescription,

    // Button components
    ButtonList
],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterContentInit {
  @ContentChildren(HeroTemplateDirective) templates!: QueryList<HeroTemplateDirective>;

  leftBodyTemplate?: TemplateRef<any>;
  rightBodyTemplate?: TemplateRef<any>;

  description = input<string>('');
  subtitle = input<string>('');
  image = input<string>('');
  title = input<string>('');

  ngAfterContentInit() {
    this.templates.forEach((template) => {
      switch (template.heroTemplate) {
        case 'leftBody':
          this.leftBodyTemplate = template.templateRef;
          break;
        case 'rightBody':
          this.rightBodyTemplate = template.templateRef;
          break;
      }
    });
  }

  // Helper to check if full-width (no right body)
  get isFullWidth(): boolean {
    return !this.rightBodyTemplate;
  }
}
