import { Product } from "../product/product"
import { Input } from "@angular/core"

export class Cart {
  id: number;
  items: CartItem[] = new Array<CartItem>();
  totalCount: number = 0;

  addItem(item: CartItem) {
    this.totalCount += item.quantity*1;
    this.items.push(item);
  }

  removeItem(removedItem: CartItem) {
    this.items = this.items.filter(item => item !== removedItem);
  }

  totalAmount(): number {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
  updateCount(oldQty: number, newQty: number) {
    this.totalCount = this.totalCount - oldQty + newQty;
  }
  totalItems(): number {
    // console.log("total");
    // return this.items.reduce((sum, item) => sum + item.quantity * 1, 0);
    return this.totalCount;
  }

}

export class CartItem {
  constructor(public product: Product, public quantity: number = 1) { }

}
