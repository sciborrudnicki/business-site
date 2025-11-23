import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-center',
  imports: [
    RouterLink
  ],
  templateUrl: './page-center.html',
  styleUrl: './page-center.scss',
})
export class PageCenter {
  @HostBinding('class') public hostClass = 'flex-grow';
}
