import { Injectable } from "@angular/core";

// PrimeNG Modules
import { MenuItem } from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class MenuBarService {
  public get items(): MenuItem[] {
    return this.#items;
  }

  #items: MenuItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'About', routerLink: '/about' },
    { label: 'Services', routerLink: '/services' },
    { label: 'Achievements', routerLink: '/achievements' },
    { label: 'Transformations', routerLink: '/transformations' },
    { label: 'Gallery', routerLink: '/gallery' },
    // { label: 'Book Training', routerLink: '/book-training' },
    { label: 'Pricing', routerLink: '/pricing' },
    { label: 'Contact', routerLink: '/contact' },
  ];

  setItems(items: MenuItem[]) {
    this.#items = items;
  }
}