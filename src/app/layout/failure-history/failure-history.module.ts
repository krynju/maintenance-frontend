import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FailureHistoryRoutingModule} from './failure-history-routing.module';
import {FhPageComponent} from './fh-page/fh-page.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [FhPageComponent],
  imports: [
    CommonModule,
    FailureHistoryRoutingModule,
    SharedModule
  ]
})
export class FailureHistoryModule {
}
