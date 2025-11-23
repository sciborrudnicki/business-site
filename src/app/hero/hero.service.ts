import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroName(): string {
    return 'Super Angular Hero';
  }
};