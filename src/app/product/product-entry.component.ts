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
 
  constructor(private productService: ProductService) { }

  addProduct(productEntryForm,productName) {
    console.log(productEntryForm);
    console.log(productName.errors);
    if (productEntryForm.valid) {
      this.productService.addItem(this.product);
      this.product = new Product();
      productEntryForm.reset();
    }
  }

  log(model) {
    console.log(model);
  }


}
