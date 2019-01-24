import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TopnavComponent} from './components/topnav/topnav.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DemoMaterialModule} from '../material_module';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {FailureListComponent} from './failure-list/failure-list.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    DemoMaterialModule,
  ],
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidebarComponent,
    TicketListComponent,
    FailureListComponent,
  ],
  exports: [TicketListComponent, FailureListComponent]
})
export class LayoutModule {
}
