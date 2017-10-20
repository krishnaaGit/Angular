import { Injectable } from '@angular/core';
import { Product,PRODUCTS } from "../product/product"



@Injectable()
export class ProductService {

  addItem(product: Product): void {
    PRODUCTS.push(product);    
  }

  getProducts():Promise<Product[]>{
    return Promise.resolve(PRODUCTS);
  } 
}
