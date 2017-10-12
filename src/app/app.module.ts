import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [
    AppComponent, MyComponent, ProductListComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
