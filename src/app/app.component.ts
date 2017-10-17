import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <shopping-cart></shopping-cart>
    <product-list></product-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'Angular project';
}
