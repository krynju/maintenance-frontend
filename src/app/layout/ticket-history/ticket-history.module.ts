import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TicketHistoryRoutingModule} from './ticket-history-routing.module';
import {ThPageComponent} from './th-page/th-page.component';
import {DemoMaterialModule} from '../../material_module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [ThPageComponent],
  imports: [
    CommonModule,
    TicketHistoryRoutingModule,
    DemoMaterialModule,
    SharedModule
  ]
})
export class TicketHistoryModule {
}
