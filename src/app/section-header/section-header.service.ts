import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SectionHeaderService {
  #sizes = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-4xl'
  };
  #size = this.#sizes.medium;

  public get size() {
    return this.#size;
  }
  setSize(size: 'small' | 'medium' | 'large' = 'medium') {
    this.#size = this.#sizes[size];
  }
}