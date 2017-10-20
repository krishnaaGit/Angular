import { Injectable } from '@angular/core';
import { Product,PRODUCTS } from "../product/product"



@Injectable()
export class ProductService {

  public addItem(product: Product): void {
    PRODUCTS.push(product);    
  }
}
