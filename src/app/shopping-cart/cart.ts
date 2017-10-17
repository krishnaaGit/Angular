import { Product } from "../product/product"
import { Input } from "@angular/core"

export class Cart {
  id: number;
  items: CartItem[] = new Array<CartItem>();

  addItem(item: CartItem) {
    this.items.push(item);
  }

  removeItem(removedItem: CartItem) {
    this.items = this.items.filter(item => item !== removedItem);
  }

  totalAmount(): number {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  totalItems(): number {
    return this.items.reduce((sum, item) => sum + item.quantity*1, 0);
  }

}

export class CartItem {
  constructor(public product: Product, public quantity: number = 1 ){}
  
}
