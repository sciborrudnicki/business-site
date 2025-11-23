import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  public get items() {
    return this.#items;
  }

  #items = [
    {
      name: 'Basic',
      description: 'Basic features for personal use',
      price: '$19',
      per: 'month',
      features: [
        'Access to basic features',
        'Email support',
        'Single user'
      ]
    },
    {
      name: 'Pro',
      description: 'Perfect for professionals',
      price: '$49',
      per: 'month',
      features: [
        'Access to all features',
        'Priority email support',
        'Up to 5 users'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Customized solutions for businesses',
      price: 'Contact us',
      features: [
        'Customized solutions',
        'Dedicated support',
        'Unlimited users'
      ]
    }
  ];
}