// Angular.
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, ContentChildren, effect, Host, HostBinding, inject, input, OnInit, QueryList, TemplateRef } from '@angular/core';
// Service.
import { GridService } from './grid.service';
// Ui Service.
import { UiClassService } from '../ui';
import { GridTemplateDirective } from './grid.directive';


@Component({
  selector: 'ap-grid',
  imports: [
    CommonModule
  ],
  templateUrl: './grid.html',
  styleUrls: ['./grid.scss'],
})
export class Grid<
  Title = '',
  Columns extends number = number,
  T extends any[] = any[]
> implements AfterViewInit, OnInit {
  @HostBinding('class') get hostClasses(): string {
    return this.classService.class;
  }

  @ContentChild('itemTemplate', { read: TemplateRef }) itemTemplate: TemplateRef<any> | null = null;

  // Dynamically collect all projected ng-template
  // @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;
  @ContentChildren(GridTemplateDirective, { read: TemplateRef }) templates!: QueryList<TemplateRef<any>>;

  // Input.
  public columns = input<Columns>(1 as Columns);
  public gap = input<string>('4');
  public items = input<T>();
  public width = input<string>('');

  // Service.
  public classService = inject<UiClassService<'grid' | 'gap' | `grid-cols` | 'w'>>(UiClassService);
  public gridService = inject<GridService<Title, Columns, T>>(GridService);

  constructor() {
    // React to input changes and update the service
    effect(() => {
      const currentItems = this.items();
      if (currentItems) {
        this.gridService.setItems(currentItems);
      }
    });

    effect(() => {
      const currentColumns = this.columns();
      if (currentColumns) {
        this.gridService.setColumns(currentColumns);
        this.classService.update(`grid-cols`, `${this.gridService.columns}`, ['', 'sm', 'md', 'lg'], true);
      }
    });

    effect(() => {
      const currentGap = this.gap();
      if (currentGap) {
        this.classService.update(`gap`, currentGap);
      }
    });

    effect(() => {
      const currentWidth = this.width();
      if (currentWidth) {
        this.classService.update(`w`, currentWidth);
      }
    });
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.classService.add(`grid`);

    // Input for columns.
    // Dynamic classes based on columns.
    // {
    //   'grid-cols': {
    //     4: ['', 'sm', 'md', 'lg'],
    //   } 
    // }

    this.classService.add(`grid-cols`, `${this.gridService.columns}`, ['', 'sm', 'md', 'lg'], true);
    this.classService.add(`gap`, this.gap());
    this.classService.add(`w`, this.width());
  }

  // private updateColumnClasses(cols: number) {
  //   // Remove existing column classes
  //   this.classService.names.forEach(name => {
  //     if (name.startsWith('grid-cols-')) {
  //       this.classService.remove(name);
  //     }
  //   });

  //   // Add new ones
  //   this.classService.add(`grid-cols-${cols}`);
  //   this.classService.add(`sm:grid-cols-${cols}`);
  //   this.classService.add(`md:grid-cols-${cols}`);
  //   this.classService.add(`lg:grid-cols-${cols}`);
  // }
}
