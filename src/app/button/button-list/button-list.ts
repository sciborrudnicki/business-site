import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Button } from '../button';

export interface ButtonConfig {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  outlined?: boolean;
  icon?: string;
  severity?: 'success' | 'info' | 'warning' | 'danger' | 'secondary';
  size?: 'small' | 'large';
  disabled?: boolean;
  onClick?: () => void;  // Optional click handler
}

@Component({
  selector: 'app-button-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    // Angular modules
    CommonModule,

    // PrimeNG modules
    ButtonModule,

    // Button component
    Button
  ],
  templateUrl: './button-list.html',
  styleUrls: ['./button-list.scss'],
})
export class ButtonList {
  buttons = input<ButtonConfig[]>([]);  // New JSON input
  direction = input<'row' | 'column'>('row');
  justify = input<'start' | 'center' | 'end'>('center');

  justifyClass() {
    const base = this.direction() === 'row' ? 'justify-center lg:justify-' : 'items-';
    switch (this.justify()) {
      case 'start': return base + 'start';
      case 'end': return base + 'end';
      default: return base + 'center';
    }
  }
}