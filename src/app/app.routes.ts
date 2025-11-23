import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./trainer-features-grid/trainer-features-grid').then(m => m.TrainerFeaturesGrid) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'achievements', loadComponent: () => import('./achievements/achievements').then(m => m.Achievements) },
  // { path: 'book-training', loadComponent: () => import('./book-training-form/book-training-form').then(m => m.BookTraining) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },
  { path: 'gallery', loadComponent: () => import('./gallery/gallery').then(m => m.Gallery) },
  { path: 'services', loadComponent: () => import('./services/services').then(m => m.Services) },
  { path: 'pricing', loadComponent: () => import('./pricing/pricing').then(m => m.Pricing) },
  { path: 'transformations', loadComponent: () => import('./transformations/transformations').then(m => m.Transformations) },
];
