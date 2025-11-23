// import { Component, HostBinding, input, InputSignal, signal } from '@angular/core';

// export type PaddingInputs = {
//   px?: string;
//   py?: string;
//   pl?: string;
//   pr?: string;
//   pt?: string;
//   pb?: string;
// };

// export abstract class BaseStylingComponent {
//   // Individual padding inputs (fallback)
//   px: InputSignal<string> = signal('px-0');
//   py: InputSignal<string> = input('py-0');
//   pl: InputSignal<string> = input('pl-0');
//   pr: InputSignal<string> = input('pr-0');
//   pt: InputSignal<string> = input('pt-0');
//   pb: InputSignal<string> = input('pb-0');

//   // Shorthand padding input (e.g., "2", "x4 y8", "t2 r4 b6 l8")
//   padding: InputSignal<string> = input('');

//   // Parse shorthand (e.g., "2" -> p-2, "x4 y8" -> px-4 py-8)
//   private parsePadding(shorthand: string): string {
//     if (!shorthand) return '';
//     const parts = shorthand.trim().split(/\s+/);
//     let classes = '';

//     if (parts.length === 1) {
//       // Single value: apply to all sides (e.g., "2" -> p-2)
//       classes = `p-${parts[0]}`;
//     } else if (parts.length === 2) {
//       // Two values: x and y (e.g., "4 8" -> px-4 py-8)
//       classes = `px-${parts[0]} py-${parts[1]}`;
//     } else if (parts.length === 4) {
//       // Four values: top, right, bottom, left (e.g., "2 4 6 8" -> pt-2 pr-4 pb-6 pl-8)
//       classes = `pt-${parts[0]} pr-${parts[1]} pb-${parts[2]} pl-${parts[3]}`;
//     } else {
//       // Invalid, ignore or log error
//       console.warn(`Invalid padding shorthand: ${shorthand}`);
//     }
//     return classes;
//   }

//   @HostBinding('class')
//   get hostClass(): string {
//     // Use shorthand if provided, else fall back to individual inputs
//     const paddingClasses = this.padding() ? this.parsePadding(this.padding()) : 
//       `${this.px()} ${this.py()} ${this.pl()} ${this.pr()} ${this.pt()} ${this.pb()}`;
    
//     const additional = this.getAdditionalClasses();
//     return `${paddingClasses} ${additional}`.trim();
//   }

//   // Override in subclasses
//   protected getAdditionalClasses(): string {
//     return '';
//   }
// }


