import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FailureHistoryRoutingModule} from './failure-history-routing.module';
import {FhPageComponent} from './fh-page/fh-page.component';
import {LayoutModule} from '../layout.module';

@NgModule({
  declarations: [FhPageComponent],
  imports: [
    CommonModule,
    FailureHistoryRoutingModule,
    LayoutModule,
  ]
})
export class FailureHistoryModule {
}
