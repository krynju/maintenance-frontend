import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashPageComponent} from './dash-page/dash-page.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SummaryComponent} from './summary/summary.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DemoMaterialModule} from '../../material_module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashPageComponent,
    SummaryComponent,

  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FlexLayoutModule,
    DemoMaterialModule,
    SharedModule,
  ],

})
export class DashboardModule {
}
