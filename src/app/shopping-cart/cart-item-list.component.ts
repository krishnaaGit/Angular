import { Component } from '@angular/core';

import { Product } from '../product/product';
import {CartItem,Cart} from "../shopping-cart/cart"
import {ItemCostPipe} from "../shopping-cart/item-cost.pipe"
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';




@Component({
  selector: 'cart-item-list',
  template: ` 
    <h1>{{title}}</h1>

    <ul class="products">
    <li *ngFor="let cartItem of cart.items">    
      <span><label>id: </label>{{cartItem.product.id}}</span>
      <span><label>name: </label>{{cartItem.product.name}}</span>
      <span><label>description: </label>{{cartItem.product.description}}</span>
      <span><label>condition: </label>{{cartItem.product.condition}}</span>
      <span><label>rate: </label>$ {{cartItem.product.price}}</span>
      <span><label>quantity: </label>$ {{cartItem.quantity}}</span>
      <span><label>total: </label>$ {{cartItem | itemCost }}</span>
      
    </li>
    </ul>
    `,
  styleUrls: ['../style/product.style.css']
})
export class CartItemListComponent {
  constructor(private shoppingCartService:ShoppingCartService){}
  
  title: "Cart Item List";
  cart:Cart = this.shoppingCartService.cart;

}
