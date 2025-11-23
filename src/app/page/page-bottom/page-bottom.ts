import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-bottom',
  imports: [
    RouterLink
  ],
  templateUrl: './page-bottom.html',
  styleUrls: ['./page-bottom.scss'],
})
export class PageBottom {
  @HostBinding('class') public hostClass = 'flex-shrink-0';
}
