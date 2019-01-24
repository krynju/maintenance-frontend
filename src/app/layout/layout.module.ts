import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TopnavComponent} from './components/topnav/topnav.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DemoMaterialModule} from '../material_module';
import {FormsModule} from '@angular/forms';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';
import {MatCardModule} from '@angular/material/card';


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
  ],
  exports: []
})
export class LayoutModule {
}
