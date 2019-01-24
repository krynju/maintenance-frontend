import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashPageComponent} from './dash-page/dash-page.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SummaryComponent} from './summary/summary.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {DemoMaterialModule} from '../../material_module';

@NgModule({
  declarations: [
    DashPageComponent,
    // MatCard,
    // MatCardContent,
    SummaryComponent,
    TicketListComponent,

  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FlexLayoutModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatFormFieldModule,
    DemoMaterialModule,
  ]
})
export class DashboardModule {
}
