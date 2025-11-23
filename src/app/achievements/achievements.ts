import { Component, inject, input } from '@angular/core';
// Custom Components.
import { Container } from '../container/container';
import { Grid } from '../grid/grid';
import { SectionHeader } from '../section-header/section-header';
// Service.
import { AchievementsService } from './achievements.service';
// Interface.
import { Achievement } from '../interface/achievement.interface';
// Module.
import { UiContainerModule } from '../container/ui-container.module';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-achievements',
  imports: [
    Grid,
    SectionHeader,

    // Module.
    UiContainerModule,

    // PrimeNg
    TagModule
  ],
  providers: [],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.scss'],
})
export class Achievements {
  achievements = input<Achievement[]>();
  achievementsService = inject<AchievementsService>(AchievementsService);

  public description = input('Showcase of certifications, awards, and milestones in Angular development.');
  public icon = input('pi pi-trophy');
  public title = input('Achievements');

  public input = {
    title: this.title,
    icon: this.icon,
    description: this.description
  };

  constructor() {}
}
