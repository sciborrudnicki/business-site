import { Injectable } from "@angular/core";
import { FeatureShape } from "./feature-shape.interface";

@Injectable({
  providedIn: 'root',
})
export class FeaturesService<T extends FeatureShape[] = FeatureShape[]> {
  #data: T = [
    {
      name: 'Custom Courses',
      description: 'Tailored courses to fit your learning needs.',
      icon: 'pi pi-graduation-cap',
    },
    {
      name: 'Hands-on Coding',
      description: 'Engage in practical coding sessions to enhance your skills.',
      icon: 'pi pi-code',
    },
    {
      name: 'Fast Performance',
      description: 'Experience lightning-fast load times and smooth interactions.',
      icon: 'pi pi-bolt',
    },
    {
      name: 'Secure',
      description: 'Top-notch security features to protect your data.',
      icon: 'pi pi-shield',
    },
    {
      name: 'User Friendly',
      description: 'Intuitive design that is easy to navigate.',
      icon: 'pi pi-thumbs-up',
    },
    {
      name  : 'Team Workshops',
      description: 'Collaborative workshops to boost team productivity.',
      icon: 'pi pi-users',
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock support to assist you whenever needed.',
      icon: 'pi pi-headphones',
    },
    {
      name: 'Expert Reviews',
      description: 'Get feedback from industry experts to improve your work.',
      icon: 'pi pi-star',
    }
  ] as T;

  get(): T {
    return this.#data;
  }

  set(features: T): void {
    // This is a stub for setting features, implementation can vary based on requirements.
    console.log('Features set:', features);
    this.#data = features;
  }
}