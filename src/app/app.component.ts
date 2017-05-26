import { Component } from '@angular/core';
import { characters } from './characters';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items: any[] = characters;
  private gridView: GridDataResult;
  private data: Object[];
  private pageSize: number = 10;
  private skip: number = 0;

  constructor() {
    this.loadItems();
  }

  protected pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length
    };
  }
}
