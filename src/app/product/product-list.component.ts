import { Component } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'product-list',
  template: ` 
    <h1>{{title}}</h1>

    <ul class="products">
    <li *ngFor="let product of products" [class.selected]="product === selectedProduct"
    (click)="onSelect(product)">    
      <span><label>id: </label>{{product.id}}</span>
      <span><label>name: </label>{{product.name}}</span>
      <span><label>description: </label>{{product.description}}</span>
      <span><label>price: </label>$ {{product.price}}</span>
      <span><label>condition: </label>{{product.condition}}</span>
    </li>
    </ul>

    <product-detail  [selectedProduct]="selectedProduct"></product-detail>

    `,
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

const PRODUCTS: Product[] = [
  { id: 1, name: 'Mouse', description: "new mouse", price: 100, condition: "new" },
  { id: 2, name: 'Mouse', description: "old mouse", price: 1, condition: "used" },
  { id: 3, name: 'Keyboard', description: "new keyboard", price: 100, condition: "new" },
  { id: 4, name: 'Bottle', description: "stinky bottle ", price: 1, condition: "discontinued" },
  { id: 5, name: 'Cap', description: "new cap", price: 40, condition: "new" }
];
