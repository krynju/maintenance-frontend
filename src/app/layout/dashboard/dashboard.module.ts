import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashPageComponent} from './dash-page/dash-page.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SummaryComponent} from './summary/summary.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DemoMaterialModule} from '../../material_module';
import {LayoutModule} from '../layout.module';

@NgModule({
  declarations: [
    DashPageComponent,
    // MatCard,
    // MatCardContent,
    SummaryComponent,

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
    LayoutModule,
  ],

})
export class DashboardModule {
}
