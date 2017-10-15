import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }       from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { DesignModule } from '../design/design.module';


@NgModule({
  imports:[
    DesignModule, 
    FormsModule,
    CommonModule
  ],
  declarations: [
     ProductListComponent,
     ProductDetailComponent
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: []
})
export class ProductModule { }
