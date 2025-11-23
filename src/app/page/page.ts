import { Component, HostBinding, input, model, output } from '@angular/core';

import { PageBottom } from './page-bottom/page-bottom';
import { MenuBar } from '../menu-bar/menu-bar';
import { Header } from "../header/header";
import { PageTop } from './page-top/page-top';
import { PageCenter } from './page-center/page-center';

@Component({
  selector: 'app-page',
  imports: [
    // Page
    PageBottom,
    PageCenter,
    PageTop,

    MenuBar,
],
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
})
export class Page {
  bookingDialogOpened = output<boolean>();

  public title = model('');

  // Display.
  public flex = input('flex flex-col');

  public width = input('w-full');
  public height = input('min-h-screen');

  public paddingX = input('px-0');
  public paddingY = input('py-0');

  public background = input('bg-surface-0 dark:bg-surface-950');

  showBookingDialog = false;

  @HostBinding('class') public get hostClass() {
    return `${this.title()}-page ${this.background()} ${this.paddingX()} ${this.paddingY()} ${this.height()} ${this.width()}`;
  }
}
