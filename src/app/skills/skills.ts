// Angular.
import { Component, signal } from '@angular/core';
// PrimeNG Modules.
import { ProgressBarModule } from 'primeng/progressbar';

// Custom Components.
import { SectionHeader } from '../section-header/section-header';

// Custom Services.
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  imports: [
    SectionHeader,
    ProgressBarModule
  ],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class Skills {
  protected readonly title = signal('Skills');
  constructor(protected skillsService: SkillsService) {}
}
