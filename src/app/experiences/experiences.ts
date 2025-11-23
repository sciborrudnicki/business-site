// A
import { Component, signal } from '@angular/core';

// PrimeNG Modules.
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { TimelineModule } from 'primeng/timeline';

// Custom Services.
import { ExperiencesService } from './experiences.service';
import { SectionHeader } from "../section-header/section-header";

// Module.
import { UiContainerModule } from '../container/ui-container.module';

@Component({
  selector: 'app-experiences',
  imports: [
    SectionHeader,
    ButtonModule,
    CardModule,
    ProgressBarModule,
    TimelineModule,
    SectionHeader,

    UiContainerModule
],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss'],
})
export class Experiences {
  public title = signal('Experiences');
  constructor(public experiencesService: ExperiencesService) {
  }
}
