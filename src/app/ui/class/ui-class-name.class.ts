export class UiClassName<
Active,
Variant,
ScreenSize,
Pseudo,
Orientation,
Extra
> {
  // dark:lg:hover:portrait:bg-primary-500
  constructor(
    public active: Active,
    public variant: Variant,
    public screenSize: ScreenSize,
    public pseudo: Pseudo,
    public orientation: Orientation,
    public extra: Extra
  ) {}
}




// import { Injectable, signal, WritableSignal } from "@angular/core";

// export type UiScreenSizes = '' | 'lg' | 'md' | 'sm';

// export interface UiClassSettings {
//   active?: boolean;c
//   screen?: UiScreenSizes;
//   pseudo?: string; // e.g., 'hover'
//   baseClass?: string; // e.g., 'bg-primary-500'
//   variant?: string; // e.g., 'dark'
//   orientation?: string; // e.g., 'portrait'
//   contrast?: string; // New: e.g., 'forced-colors'
//   prefers?: string; // New: e.g., 'color-scheme'
//   has?: string; // New: e.g., '[*]'
//   not?: string; // New: e.g., 'hover'
//   group?: string; // New: e.g., 'hover'
//   peer?: string; // New: e.g., 'hover'
//   arbitraryVariant?: string; // New: e.g., '[data-open]'
//   important?: boolean; // New: true for ! prefix
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class UiClassService<T extends UiClassSettings = UiClassSettings> {

//   public get class(): string {
//     return this.combine(...this.names.map(name => {
//       const settings = this.#class()[name];
//       if (settings && settings.active) {
//         const { screen, pseudo, variant, orientation, contrast, prefers, has, not, group, peer, arbitraryVariant, important, baseClass } = settings;
//         const pseudoStr = pseudo ? pseudo + ':' : '';
//         const variantStr = variant ? variant + ':' : '';
//         const orientationStr = orientation ? orientation + ':' : '';
//         const contrastStr = contrast ? contrast + ':' : '';
//         const prefersStr = prefers ? `prefers-${prefers}:` : '';
//         const hasStr = has ? `has-${has}:` : '';
//         const notStr = not ? `not-${not}:` : '';
//         const groupStr = group ? `group-${group}:` : '';
//         const peerStr = peer ? `peer-${peer}:` : '';
//         const arbitraryVariantStr = arbitraryVariant ? arbitraryVariant + ':' : '';
//         const importantStr = important ? '!' : '';
//         const fullClass = `${screen ? screen + ':' : ''}${pseudoStr}${variantStr}${orientationStr}${contrastStr}${prefersStr}${hasStr}${notStr}${groupStr}${peerStr}${arbitraryVariantStr}${importantStr}${baseClass || name}`;
//         return fullClass;
//       }
//       return null;
//     }));
//   }

//   // ... rest of the service (names, #class, add, combine, remove, toggle) unchanged ...

//   public add(className: keyof T, settings: Partial<UiClassSettings> = {}): void {
//     this.#class.update(current => ({ ...current, [className]: { active: true, ...settings } } as T));
//   }
// }