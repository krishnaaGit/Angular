import { Component, OnInit } from '@angular/core';
import { CartItem, Cart } from "../shopping-cart/cart"
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';



@Component({
  selector: 'shopping-cart',
  template: `{{totalItems}}
    <p (click)="showCartItems()">
      Your Shopping Cart
    </p>
    <div *ngIf="showCartItems">
    </div>
  `,
  styles: []
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  totalItems: number = 0;
  cart: Cart = this.shoppingCartService.cart;
  ngOnInit() {
  }
  showCartItems(){

  }

}
