import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Grid } from '../../grid/grid';

@Component({
  selector: 'app-page-top',
  imports: [
    Grid,
    RouterLink
  ],
  templateUrl: './page-top.html',
  styleUrl: './page-top.scss',
})
export class PageTop {
  @HostBinding('class') public hostClass = 'flex-shrink-0';
}
