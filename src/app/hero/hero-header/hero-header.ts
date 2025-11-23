import { Component, effect, inject, input } from '@angular/core';
import { HeroHeaderService } from './hero-header.service';

@Component({
  selector: 'app-hero-header',
  imports: [],
  templateUrl: './hero-header.html',
  styleUrl: './hero-header.scss',
})
export class HeroHeader {
  title = input('title');
  subtitle = input('subtitle');
  heroHeaderService = inject(HeroHeaderService);

  constructor() {
    effect(() => {
      this.heroHeaderService.setTitle(this.title());
      this.heroHeaderService.setSubtitle(this.subtitle());
    });
  }
}
