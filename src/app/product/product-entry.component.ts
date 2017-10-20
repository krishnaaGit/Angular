import { Component, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'product-entry',
  templateUrl: "./product-entry.component.html",
  styles: []
})
export class ProductEntryComponent {
  product: Product = new Product();
  quantity: number = 1 ;
   
  constructor(private productService: ProductService) { }

  addProduct() {
   
    this.productService.addItem(this.product);
    this.product = new Product();
   
  }

  log(model) {
    console.log(model);
    }
    

}
