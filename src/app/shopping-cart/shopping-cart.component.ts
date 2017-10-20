import { Component, OnInit } from '@angular/core';
import { CartItem, Cart } from "../shopping-cart/cart"
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl:"./shopping-cart.component.html",
  styles: []
})
export class ShoppingCartComponent{

  constructor(private shoppingCartService: ShoppingCartService) { }

  showCartItems:boolean = false;
  cart: Cart = this.shoppingCartService.cart;
  
}
