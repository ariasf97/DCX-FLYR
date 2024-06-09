import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { Product } from '../../interfaces/product.interface';
import { Journay } from '../../interfaces/response.interface';

@Component({
  selector: 'app-result-dcx',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './result-dcx.component.html',
  styleUrl: './result-dcx.component.css',
})
export class ResultDcxComponent {
  @Input() journays: Journay[] = [];

  ngOnInit() {}

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
