import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { DesignModule } from './design/design.module';



@NgModule({
  declarations: [
    AppComponent, MyComponent, ProductListComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,  FormsModule, DesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
