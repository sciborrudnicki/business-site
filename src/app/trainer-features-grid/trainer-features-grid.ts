import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

// Component
import { Hero } from '../hero/hero';
import { HeroTemplateDirective } from '../hero/form-template.directive';
import { HeroHeader } from "../hero/hero-header/hero-header";
import { MessageMe } from '../message-me/message-me';
import { BusinessDescription } from '../business-description/business-description';
import { Container } from '../container/container';
// Directive
import { ContainerTemplateDirective } from "../container/container-template.directive";
// Service
import { MessageService } from 'primeng/api';

@Component({
  selector: 'trainer-features-grid',
  standalone: true,
  imports: [
    BusinessDescription,
    Container,
    Hero,
    HeroHeader,
    HeroTemplateDirective,
    MessageMe,

    AvatarModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    TextareaModule,
    ContainerTemplateDirective
],
  templateUrl: './trainer-features-grid.html',
  styleUrls: ['./trainer-features-grid.scss'],
})
export class TrainerFeaturesGrid {
  // messageService = inject(MessageService);

  constructor() {}

  ngOnInit() {}
}