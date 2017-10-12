import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    AppComponent,MyComponent,ProductComponent
  ],
  imports: [
    BrowserModule,  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
