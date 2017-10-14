import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component';

import { DesignModule } from './design/design.module';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [
    AppComponent, MyComponent
  ],
  imports: [
    BrowserModule,  FormsModule, DesignModule, ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
