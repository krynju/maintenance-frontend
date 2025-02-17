import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TopnavComponent} from './components/topnav/topnav.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DemoMaterialModule} from '../material_module';
import {FormsModule} from '@angular/forms';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';
import {MatCardModule} from '@angular/material/card';
import {TicketEditComponent} from './ticket-edit/ticket-edit.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { FailureCreateComponent } from './failure-create/failure-create.component';
import { FailureEditComponent } from './failure-edit/failure-edit.component';
import { FailureDetailComponent } from './failure-detail/failure-detail.component';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    DemoMaterialModule,
    FormsModule,
  ],
  declarations: [
    LayoutComponent,
    TopnavComponent,
    TicketEditComponent,
    SidebarComponent,
    TicketDetailComponent,
    TicketCreateComponent,
    FailureCreateComponent,
    FailureEditComponent,
    FailureDetailComponent,
  ],
  exports: []
})
export class LayoutModule {
}
