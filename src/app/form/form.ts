import { Component, ContentChildren, QueryList, AfterContentInit, TemplateRef, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateDirective } from './form-template.directive';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ax-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.html',
  styleUrls: ['./form.scss'],
})
export class Form implements AfterContentInit {
  @ContentChildren(FormTemplateDirective) templates!: QueryList<FormTemplateDirective>;

  formGroup = input(new FormGroup({}));
  onSubmit = input(() => {});

  headerTemplate?: TemplateRef<any>;
  bodyTemplate?: TemplateRef<any>;
  footerTemplate?: TemplateRef<any>;

  ngAfterContentInit() {
    this.templates.forEach((template) => {
      switch (template.formTemplate) {
        case 'header':
          this.headerTemplate = template.templateRef;
          break;
        case 'body':
          this.bodyTemplate = template.templateRef;
          break;
        case 'footer':
          this.footerTemplate = template.templateRef;
          break;
      }
    });
  }
}