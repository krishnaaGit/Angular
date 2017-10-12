import { Component } from '@angular/core';


type conditionType = "new" | "used" | "discontinued";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  condition: conditionType;
}

@Component({
  selector: 'product-component',
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

    <div *ngIf="selectedProduct">
    <h2>{{selectedProduct.name}} details!</h2>
    <div><label>id: </label>{{selectedProduct.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
    </div>
    <div>
      <label>Description: </label>
      <input [(ngModel)]="selectedProduct.description" placeholder="description"/>
    </div>
    <div>
      <label>Price: </label>
      <input [(ngModel)]="selectedProduct.price" placeholder="price"/>
    </div>
    <div>
      <label>Condition: </label>
      <input [(ngModel)]="selectedProduct.condition" placeholder="condition"/>
    </div>
  </div>
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
export class ProductComponent {
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
