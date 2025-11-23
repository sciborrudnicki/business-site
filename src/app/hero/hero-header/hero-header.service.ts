import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HeroHeaderService {
  public get subtitle() { return this.#subtitle; }
  public get title() { return this.#title; }

  #subtitle = '';
  #title = '';

  getHeroData() {
    return {
      title: 'Welcome to My Business Card',
      subtitle: 'Showcasing my skills and projects'
    };
  }

  setTitle(title: string) {
    // Logic to set the title, e.g., update a state or emit an event
    console.log(`Title set to: ${title}`);
  }

  setSubtitle(subtitle: string) {
    // Logic to set the subtitle, e.g., update a state or emit an event
    console.log(`Subtitle set to: ${subtitle}`);
  }
}