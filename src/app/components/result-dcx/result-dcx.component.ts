import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-result-dcx',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './result-dcx.component.html',
  styleUrl: './result-dcx.component.css',
})
export class ResultDcxComponent {
  products: Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
  ];

  //constructor(private productService: ProductService) {}

  ngOnInit() {
    //this.productService.getProducts().then((data) => (this.products = data));
  }

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
