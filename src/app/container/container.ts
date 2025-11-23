import { Component, ContentChildren, HostBinding, inject, Input, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerTemplateDirective } from './container-template.directive';
import { UiPaddingClass } from '../ui/padding/ui-padding.abstract';

// Grid.
import { Grid } from '../grid/grid';
import { GridTemplateDirective } from '../grid/grid.directive';
// Service.
import { UiPaddingService } from '../ui/padding/ui-padding.service';

@Component({
  selector: 'ap-container',
  standalone: true,
  imports: [
    CommonModule,
    Grid,

    GridTemplateDirective,
  ],
  providers: [UiPaddingService],
  templateUrl: './container.html',
  styleUrls: ['./container.scss'],

  inputs: ['px', 'py', 'pl', 'pr', 'pt', 'pb']
})
export class Container extends UiPaddingClass {
  @HostBinding('class') override get hostClass() {
    return `
      container
      flex-${this.direction}
      ${this.maxWidth}
      ${this.width}
      ${super.hostClass}
    `.trim();
  }

  @Input() direction: 'row' | 'column' = 'column';
  @Input() maxWidth?: string = 'max-w-6xl';
  @Input() width: string = 'w-full';

  @ContentChildren(ContainerTemplateDirective) templates!: QueryList<ContainerTemplateDirective>;

  centerTemplate?: TemplateRef<any>;
  leftTemplate?: TemplateRef<any>;
  rightTemplate?: TemplateRef<any>;

  @Input() set containerClass(value: string) {
    // this.updatePadding({ px: value });
  }

  // Inject and pass to super for private instance
  constructor() {
    const paddingService = inject(UiPaddingService);
    super(paddingService);
  }

  ngAfterContentInit() {
    this.templates.forEach(template => {
      switch (template.containerTemplate) {
        case 'center':
          this.centerTemplate = template.templateRef;
          break;
        case 'left':
          this.leftTemplate = template.templateRef;
          break;
        case 'right':
          this.rightTemplate = template.templateRef;
          break;
      }
    });
  }
}