import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent    
  ],
  imports: [
    BrowserModule,  ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
