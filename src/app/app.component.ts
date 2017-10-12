import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
    <product-list></product-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
