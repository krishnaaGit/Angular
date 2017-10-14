import { Component, Input } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'product-detail',
  template: ` 
  <div *ngIf="selectedProduct">
    <h2 [innerHTML] = "selectedProduct.name" > details!</h2>
    <div><label>id: </label>{{selectedProduct.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
    </div>
    <div>
      <label>Description: </label>
      <input [ngModel]="selectedProduct.description" (ngModelChange)="upper($event)"  placeholder="description"/>
    </div>
    <div>
      <label>Price: </label>
      <input [(ngModel)]="selectedProduct.price" placeholder="price"/>
    </div>
    <div>
      <label>Condition: </label>
      <input [(ngModel)]="selectedProduct.condition" placeholder="condition"/>
    </div>
  </div>
    `,
  styles: []
})
export class ProductDetailComponent {
   @Input() selectedProduct: Product;
    upper(value:string){

      this.selectedProduct.description = value.toUpperCase();
    }

}
