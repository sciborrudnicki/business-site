import { Component, Inject, input, output, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class Button {
  // All pButton properties
  ariaLabel = input<string>('');
  autofocus = input<boolean>(false);
  badge = input<string>('');
  badgeClass = input<string>('');
  disabled = input<boolean | undefined>(undefined);
  icon = input<string | undefined>(undefined);
  iconPos = input<'left' | 'right' | 'top' | 'bottom'>('left');
  label = input<string>('');
  link = input<boolean>(false);
  loading = input<boolean>(false);
  loadingIcon = input<string>('pi pi-spinner pi-spin');
  outlined = input<boolean>(false);
  plain = input<boolean>(false);
  raised = input<boolean>(false);
  rounded = input<boolean>(false);
  severity = input<'success' | 'info' | 'warn' | 'danger' |  'secondary' | 'help' | 'contrast'>();
  size = input<'small' | 'large'>();
  style = input<Record<string, any>>({});
  styleClass = input<string>('');
  tabindex = input<number | string>('');
  text = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');

  // Events
  onClick = output<void>();
  onFocus = output<Event>();
  onBlur = output<Event>();

  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}