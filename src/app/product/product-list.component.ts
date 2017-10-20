import { Component } from '@angular/core';

import { Product,PRODUCTS } from './product';

@Component({
  selector: 'product-list',
  templateUrl: "./product-list.component.html",
    styleUrls: ['../style/product.style.css']
})
export class ProductListComponent {
  title: "Product List";
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}

