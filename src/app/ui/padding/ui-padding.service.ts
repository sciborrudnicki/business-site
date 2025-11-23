// Angular
import { Injectable, signal, WritableSignal } from '@angular/core';
// Interfaces
import { UiPadding, UiPaddingSettings } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UiPaddingService<
  Padding extends UiPadding = UiPadding,
  SelectedPadding extends UiPaddingSettings<Padding> = UiPaddingSettings<Padding>
> {
  public get px(): SelectedPadding['px'] {
    return this.#px();
  }

  public get py(): SelectedPadding['py'] {
    return this.#py();
  }

  public get pl(): SelectedPadding['pl'] {
    return this.#pl();
  }

  public get pr(): SelectedPadding['pr'] {
    return this.#pr();
  }

  public get pt(): SelectedPadding['pt'] {
    return this.#pt();
  }

  public get pb(): SelectedPadding['pb'] {
    return this.#pb();
  }

  #px: WritableSignal<SelectedPadding['px']> = signal<SelectedPadding['px']>('');
  #py: WritableSignal<SelectedPadding['py']> = signal<SelectedPadding['py']>('');
  #pl: WritableSignal<SelectedPadding['pl']> = signal<SelectedPadding['pl']>('');
  #pr: WritableSignal<SelectedPadding['pr']> = signal<SelectedPadding['pr']>('');
  #pt: WritableSignal<SelectedPadding['pt']> = signal<SelectedPadding['pt']>('');
  #pb: WritableSignal<SelectedPadding['pb']> = signal<SelectedPadding['pb']>('');

  public set<SetPadding extends SelectedPadding>(padding: SetPadding): SetPadding {
    if (padding.px) {
      this.#px.set(`px-${padding.px}`);
    }
    if (padding.py) {
      this.#py.set(`py-${padding.py}`);
    }
    if (padding.pl) {
      this.#pl.set(`pl-${padding.pl}`);
    }
    if (padding.pr) {
      this.#pr.set(`pr-${padding.pr}`);
    }
    if (padding.pt) {
      this.#pt.set(`pt-${padding.pt}`);
    }
    if (padding.pb) {
      this.#pb.set(`pb-${padding.pb}`);
    }

    return {
      px: this.#px(),
      py: this.#py(),
      pl: this.#pl(),
      pr: this.#pr(),
      pt: this.#pt(),
      pb: this.#pb(),
    } as SetPadding;
  }
}
