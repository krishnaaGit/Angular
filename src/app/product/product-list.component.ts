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
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 50%;
  }
  .products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .products .text {
    position: relative;
    top: -3px;
  }
  .products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
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
