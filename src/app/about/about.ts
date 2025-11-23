import { Component, signal } from '@angular/core';

// PrimeNG Modules.
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

// Custom Components.
import { Experiences } from '../experiences/experiences';
import { Skills } from '../skills/skills';
import { Education } from '../education/education';
import { SectionHeader } from '../section-header/section-header';
import { Container } from '../container/container';
import { Page } from '../page/page';
import { ContainerTemplateDirective } from '../container/container-template.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  imports: [
    // Custom Components.
    Container,
    Page,
    SectionHeader,

    Education,
    Experiences,
    Skills,

    AvatarModule,
    ButtonModule,
    CardModule,
    ProgressBarModule,
    TimelineModule,

    ContainerTemplateDirective
  ],
  styleUrls: ['./about.scss'],
})
export class About {

  public title = signal('About Me');
  public icon = signal('pi pi-user');
  public description = signal('Learn more about my background, experiences, and skills in the world of Angular development.');

}