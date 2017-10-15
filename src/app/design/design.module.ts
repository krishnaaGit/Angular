import { NgModule } from '@angular/core';

import { HighlightDirective } from './highlight.directive';

import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    HighlightDirective, SummaryPipe
  ],
  exports: [
    HighlightDirective, SummaryPipe
  ],
  providers: []
})
export class DesignModule { }
