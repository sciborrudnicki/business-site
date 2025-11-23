import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.html',
  styleUrls: ['./feature.scss'],
})
export class Feature {
  color = input('text-surface-700');
  description = input('');
  icon = input('fa-solid fa-check-circle');
  iconClass = input('text-primary-500');
  name = input('');
}
