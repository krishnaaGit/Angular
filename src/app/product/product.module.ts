import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }       from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEntryComponent } from './product-entry.component';

import { DesignModule } from '../design/design.module';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { ProductService } from './product.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { CartItemListComponent } from '../shopping-cart/cart-item-list.component';
import { Cart } from '../shopping-cart/cart';
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
     ShoppingCartComponent,
     CartItemListComponent,
     ProductEntryComponent,
     ItemCostPipe
  ],
  exports: [
    ProductEntryComponent,
    ProductListComponent,
    ShoppingCartComponent
  ],
  providers: [ShoppingCartService,Cart,ProductService]
})
export class ProductModule { }
