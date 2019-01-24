import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashPageComponent} from './dash-page/dash-page.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [DashPageComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule
  ]
})
export class DashboardModule {
}
