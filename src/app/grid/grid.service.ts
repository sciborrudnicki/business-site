import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class GridService<
  Title = '',
  Columns = number,
  T extends any[] = any[]
> {
  public get columns(): Columns {
    return this.#columns;
  }

  public get items() {
    return this.#items;
  }

  public get title(): Title {
    return this.#title;
  }

  #columns: Columns = 1 as unknown as Columns;
  #items: T = [] as unknown as T;
  #title: Title = '' as unknown as Title;

  getTitle(): Title {
    return this.#title;
  }

  setColumns(columns: Columns) {
    this.#columns = columns;
  }

  setItems(newItems: T) {
    this.#items = newItems;
  }

  setTitle(title: Title) {
    this.#title = title;
  }
}