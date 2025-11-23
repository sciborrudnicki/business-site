import { Injectable, signal, WritableSignal } from "@angular/core";


export type UiScreenSizes = '' | 'lg' | 'md' | 'sm';

export interface UiClassSettings {
  active?: boolean;
  screenSizes?: UiScreenSizes[];
  value?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UiClassService<
  N extends keyof T,
  T extends { [K in N]: UiClassSettings } = {[K in N]: UiClassSettings}
> {

  public get class(): string {
    return this.combine(
      ...this.names.map(name => this.composeName(name))
    );
  }

  public get names(): (keyof T)[] {
    return Object.keys(this.#class()) as (keyof T)[];
  }

  #class: WritableSignal<T> = signal<T>({} as unknown as T);

  public add(
    className: keyof T,
    value: string = '',
    screenSizes: UiScreenSizes | UiScreenSizes[] = '',
    active: boolean = true
  ): void {
    this.#class.update(current => current = { ...current, [className]: {
      active,
      screenSizes: Array.isArray(screenSizes) ? screenSizes : [screenSizes],
      value
    }} as T);
  }

  public update(
    className: keyof T,
    value: string = '',
    screenSizes: UiScreenSizes | UiScreenSizes[] = '',
    active: boolean = true
  ): void {
    this.#class.update(current => {
      const existing = current[className] || {};
      return { ...current, [className]: {
        active,
        screenSizes: Array.isArray(screenSizes) ? screenSizes : [screenSizes],
        value
      }} as T;
    });
  }

  public combine(...classes: (string | false | null | undefined)[]): string {
    return classes.filter((cls): cls is string => !!cls).join(' ');
  }

  public composeName(className: keyof T): string {
    const classNameArr: string[] = [];
    this.#class()[className]['screenSizes']?.forEach(size => {
      if (size.length >= 0 && this.#class()[className]['active']) {
        const value = this.#class()[className]['value'];
        classNameArr.push(`
          ${size.length > 0 ? `${size}:` : ''}` +
          `${className as string}` +
          `${value && value.length > 0 ? `-${value}` : ''}
        `);
      }
    });
    return classNameArr.join(' ');
  }

  public remove(className: keyof T): void {
    this.#class.update(current => {
      const { [className]: _, ...rest } = current;
      return rest as T;
    });
  }

  public toggle(className: keyof T): void {
    this.#class.update(current => {
      const isActive = current[className];
      return { ...current, [className]: !isActive } as T;
    });
  }
}


