import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: ` {{title}}
    <p>xcvxcvxcv
      app Works!
    </p>
  `,
  styles: []
})
export class MyComponent {
  title = 'app';
}
