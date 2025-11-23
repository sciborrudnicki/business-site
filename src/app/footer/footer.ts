import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuBarService } from '../menu-bar/menu-bar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {

  constructor(public menuBarService: MenuBarService) {}
  
}
