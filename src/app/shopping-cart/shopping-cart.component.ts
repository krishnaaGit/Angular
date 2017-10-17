import { Component, OnInit } from '@angular/core';
import { CartItem, Cart } from "../shopping-cart/cart"
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';



@Component({
  selector: 'shopping-cart',
  template: `
  <div>
   <label>Total Items: </label>$ {{this.shoppingCartService.cart.totalItems()}}
  <label>Total Amount: </label>$ {{this.shoppingCartService.cart.totalAmount()}}
  <button (click)="showCartItems = !showCartItems">
      Show/Hide Shopping Cart
    </button>
  </div>

  <div *ngIf="showCartItems">
  <cart-item-list></cart-item-list>
  </div>
  `,
  styles: []
})
export class ShoppingCartComponent{

  constructor(private shoppingCartService: ShoppingCartService) { }

  showCartItems:boolean = false;
  cart: Cart = this.shoppingCartService.cart;
  
}
