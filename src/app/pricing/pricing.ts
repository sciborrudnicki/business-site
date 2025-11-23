import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
// Component.
import { Grid } from '../grid/grid';
import { SectionHeader } from '../section-header/section-header';
// Module.
import { UiContainerModule } from '../container/ui-container.module';
// Service.
import { PricingService } from './pricing.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    ButtonModule,
    SectionHeader,
    UiContainerModule,
    Grid
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {
  public description = input('Choose the perfect plan for your Angular training needs.');
  public icon = input('pi pi-dollar');
  public title = input('Pricing Plans');
  public input = {
    title: this.title,
    icon: this.icon,
    description: this.description
  };
  public pricingService = inject(PricingService);
  public items = () => this.pricingService.items;
}
