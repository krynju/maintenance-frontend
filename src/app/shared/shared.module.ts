import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketListComponent} from './components/ticket-list/ticket-list.component';
import {FailureListComponent} from './components/failure-list/failure-list.component';
import {DemoMaterialModule} from '../material_module';

@NgModule({
  declarations: [TicketListComponent, FailureListComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
  ],
  exports: [
    TicketListComponent,
    FailureListComponent,
  ]
})
export class SharedModule {
}
