// Angular.
import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';

// Custom Components.
import { Container } from '../container/container';
import { SectionHeader } from '../section-header/section-header';
import { Page } from '../page/page';

// PrimeNG.
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';

// Component Service
import { TransformationsService } from './transformations.service';
// Directive
import { ContainerTemplateDirective } from '../container/container-template.directive';

@Component({
  selector: 'app-transformations',
  imports: [
    Container,
    SectionHeader,
    Page,
    TagModule,
    ContainerTemplateDirective,
    
    CommonModule,
    CardModule,
    ProgressBarModule,
    PaginatorModule,
  ],
  templateUrl: './transformations.html',
  styleUrls: ['./transformations.scss'],
})
export class Transformations {
  public description = input('A showcase of successful Angular people transformations through training and mentorship.');
  public icon = input('pi pi-sync');
  public title = input('Transformations');

  public input = {
    title: this.title,
    icon: this.icon,
    description: this.description
  };

  // Reset page to 0 when rows per page changes
  resetPageEffect = effect(() => {
    this.rowsPerPage();  // Watch for changes
    this.currentPage.set(0);  // Reset to first page
  });

  // Pagination signals
  rowsPerPage = signal(3);  // Cards per page
  currentPage = signal(0);  // Current page (0-based)
  totalRecords = computed(() => this.transformationsService.transformations.length);

  // Paginated data
  paginatedTransformations = computed(() => {
    const start = this.currentPage() * this.rowsPerPage();
    const end = start + this.rowsPerPage();
    return this.transformationsService.transformations.slice(start, end);
  });

  constructor(public transformationsService: TransformationsService) {
    effect(() => {
      this.rowsPerPage();  // Watch for changes
      this.currentPage.set(0);  // Reset to first page
    });
  }

  // Handle page change
  onPageChange(event: any) {
    this.currentPage.set(event.page);
    if (event.rows) {
      this.rowsPerPage.set(event.rows);
    }
  }
}
