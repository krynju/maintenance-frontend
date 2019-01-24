import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashPageComponent} from './dash-page/dash-page.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MatCard, MatCardContent} from '@angular/material';
import {SummaryComponent} from './summary/summary.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    DashPageComponent,
    MatCard,
    MatCardContent,
    SummaryComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FlexLayoutModule
  ]
})
export class DashboardModule {
}
