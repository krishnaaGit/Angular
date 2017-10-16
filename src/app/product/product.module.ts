import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }       from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { DesignModule } from '../design/design.module';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { CartItemListComponent } from '../shopping-cart/cart-item-list.component';
import {ItemCostPipe} from "../shopping-cart/item-cost.pipe"


@NgModule({
  imports:[
    DesignModule, 
    FormsModule,
    CommonModule
  ],
  declarations: [
     ProductListComponent,
     ProductDetailComponent,
     CartItemListComponent,
     ItemCostPipe
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [ShoppingCartService]
})
export class ProductModule { }
