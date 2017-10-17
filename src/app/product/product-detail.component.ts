import { Component, Input } from '@angular/core';
import { Product } from './product';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';


@Component({
  selector: 'product-detail',
  template: ` 
  <div *ngIf="selectedProduct">
    <h2 [innerHTML] = "selectedProduct.name | summary:10" > details!</h2>
    <div><label>id: </label>{{selectedProduct.id}}</div>
    <div>
      <label>Name: </label>
      <input myHighlight highlightColor="yellow" [(ngModel)]="selectedProduct.name" placeholder="name"/>
    </div>
    <div>
      <label>Description: </label>
      <input [ngModel]="selectedProduct.description" (ngModelChange)="upper($event)"  placeholder="description"/>
    </div>
    <div>
      <label>Price: </label>
      <input [(ngModel)]="selectedProduct.price" placeholder="price"/>
    </div>
    <div>
      <label>Condition: </label>
      <input [(ngModel)]="selectedProduct.condition" placeholder="condition"/>
    </div>
    <div>
      <input [(ngModel)]="quantity" placeholder="Quantity"/>
      <button (click)="addToCart()">Add to Cart</button> </div>
    </div> 
    `,
  styles: []
})
export class ProductDetailComponent {
  @Input() selectedProduct: Product;
  quantity: number = 1 ;
  
  
  upper(value: string) {

    this.selectedProduct.description = value.toUpperCase();
  }

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartService.addItem(this.selectedProduct, this.quantity);
   
  }

}
