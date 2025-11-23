import { Component, signal } from '@angular/core';

// PrimeNG Modules.
import { TimelineModule } from 'primeng/timeline';
// Custom Services.
import { EducationService } from './education.service';
// Custom Components.
import { SectionHeader } from '../section-header/section-header';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
// MOdule.
import { UiContainerModule } from '../container/ui-container.module';

@Component({
  selector: 'app-education',
  imports: [
    UiContainerModule,
    SectionHeader,

    // PrimeNG Modules.
    ButtonModule,
    CardModule,
    TimelineModule,
  ],
  templateUrl: './education.html',
  styleUrls: ['./education.scss'],
})
export class Education {
  public title = signal('Education');
  constructor(public educationService: EducationService) {
  }
}
