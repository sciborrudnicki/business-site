import { Component, input, model } from '@angular/core';

// Custom Components.
import { Container } from '../container/container';
import { Page } from '../page/page';
import { SectionHeader } from '../section-header/section-header';
import { ContainerTemplateDirective } from "../container/container-template.directive";
// Module.
import { UiContainerModule } from '../container/ui-container.module';
// PrimeNG Modules.
import { GalleriaModule } from 'primeng/galleria';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    UiContainerModule,
    SectionHeader,
    Page,

    GalleriaModule
  ],
  providers: [GalleryService],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss'],
})
export class Gallery {
  public description = input('Gallery of my projects and works showcasing my skills and expertise.');
  public icon = input('pi pi-image');
  public title = input('Gallery');

  public input = {
    title: this.title,
    icon: this.icon,
    description: this.description
  };

  displayCustom: boolean | undefined;

  activeIndex: number = 0;

  images = model<{itemImageSrc: string, thumbnailImageSrc: string, alt: string, title: string}[]>([]);

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryService.getImages().then(images => this.images.set(images));
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
