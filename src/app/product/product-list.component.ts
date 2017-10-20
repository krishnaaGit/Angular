import { Component } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'product-list',
  templateUrl: "./product-list.component.html",
    styleUrls: ['../style/product.style.css']
})
export class ProductListComponent {
  title: "Product List";
  products:Product[];
  selectedProduct: Product;

  constructor(private productService:ProductService){}

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
 
  ngOnInit(): void {
    this.getProducts();
  }

}

