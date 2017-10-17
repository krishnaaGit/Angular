import { Injectable } from '@angular/core';
import {Product} from "../product/product"
import {CartItem,Cart} from "../shopping-cart/cart"
import {CartItemListComponent} from "../shopping-cart/cart-item-list.component"



@Injectable()
export class ShoppingCartService {
  constructor(public cart: Cart){}
   public addItem(product: Product, quantity: number): void {
    
    let item = this.cart.items.find((cartItem) => cartItem.product.id === product.id);
    if (item === undefined) {
      item = new CartItem(product,quantity);
      this.cart.addItem(item);
    }
    else{
      item.quantity = quantity;
      //this.cart.items.push(item);
    }
    // let item = new CartItem(product,quantity);

    // this.cart.addItem(item);
       console.log(this.cart);
  }
}
