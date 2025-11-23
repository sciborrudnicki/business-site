import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { filter } from 'rxjs/operators';

// Primeng modules
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

// Custom components
import { TrainerFeaturesGrid } from './trainer-features-grid/trainer-features-grid';
import { MenuBar } from "./menu-bar/menu-bar";
import { BookTrainingDialog } from "./book-training-dialog/book-training-dialog";
import { Page } from './page/page';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // Angular Router modules
    RouterOutlet,
    RouterLink,
    // Primeng modules
    AvatarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    TextareaModule,
    // Forms
    FormsModule,
    // Custom components
    TrainerFeaturesGrid,
    MenuBar,
    BookTrainingDialog,
    Page,
    Footer
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('business-card');

  // Dialog.
  public showBookingDialog = false;

  // title = 'Personal Trainer Business Card';
  isSubpage = false; // Flag to hide main content on subpages

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isSubpage = event.url !== '/'; // Hide main content on subpages
    });
  }

}
