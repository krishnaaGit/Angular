import { Component } from '@angular/core';


type conditionType = "new" | "used" | "discontinued";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  condition: conditionType;
}

@Component({
  selector: 'product-component',
  template: ` 
    <h1>{{title}}</h1>
    <h2>{{product.name}} details!</h2>
    <div><label>id: </label>{{product.id}}</div>
    <div><label>name: </label>{{product.name}}</div>
    <div><label>description: </label>{{product.description}}</div>
    <div><label>price: </label>$ {{product.price}}</div>
    <div><label>condition: </label>{{product.condition}}</div>
    `,
  styles: []
})
export class ProductComponent {
  title: "Product Description";
  product: Product = {
    id: 1,
    name: "Mouse",
    description: "new mouse",
    price: 100,
    condition: "new"
  };

}

