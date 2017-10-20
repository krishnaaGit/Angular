import { Component, Input } from '@angular/core';
import { Product } from './product';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';


@Component({
  selector: 'product-detail',
  templateUrl: "./product-detail.component.html",
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
