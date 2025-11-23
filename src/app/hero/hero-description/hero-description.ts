import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-description',
  imports: [],
  templateUrl: './hero-description.html',
  styleUrl: './hero-description.scss',
})
export class HeroDescription {
  description = input<string>('');
}
