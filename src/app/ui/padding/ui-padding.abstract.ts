import { Component, HostBinding, inject, Injectable, Input, signal, WritableSignal } from '@angular/core';
import { UiPaddingService } from './ui-padding.service';  // Import the service

@Injectable({
  providedIn: 'root'
})
export abstract class UiPaddingClass {
  // protected paddingService = inject<UiPaddingService>(UiPaddingService);  // Inject the service

  @HostBinding('class')
  get hostClass(): string {
    const paddingClasses = `${this.paddingService.px} ${this.paddingService.py} ${this.paddingService.pl} ${this.paddingService.pr} ${this.paddingService.pt} ${this.paddingService.pb}`;
    const additional = this.getAdditionalClasses();
    return `${paddingClasses} ${additional}`.trim();
  }

  constructor(protected paddingService: UiPaddingService) {}


  @Input() set px(value: number) {
    this.paddingService.set({ px: String(value) });
  }
  @Input() set py(value: number) {
    this.paddingService.set({ py: String(value) });
  }
  @Input() set pl(value: number) {
    this.paddingService.set({ pl: String(value) });
  }
  @Input() set pr(value: number) {
    this.paddingService.set({ pr: String(value) });
  }
  @Input() set pt(value: number) {
    this.paddingService.set({ pt: String(value) });
  }
  @Input() set pb(value: number) {
    this.paddingService.set({ pb: String(value) });
  }

  protected getAdditionalClasses(): string {
    return '';
  }
}