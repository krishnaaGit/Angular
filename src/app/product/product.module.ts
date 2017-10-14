import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { DesignModule } from '../design/design.module';



@NgModule({
  declarations: [
     ProductListComponent, ProductDetailComponent
  ],
  exports: [
    ProductListComponent, ProductDetailComponent
  ],
  providers: []
})
export class ProductModule { }
