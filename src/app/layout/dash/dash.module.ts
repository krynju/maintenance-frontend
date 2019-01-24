import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashPageComponent} from './dash-page/dash-page.component';
import {DashRoutingModule} from './dash-routing.module';

@NgModule({
  declarations: [DashPageComponent],
  imports: [
    DashRoutingModule,
    CommonModule
  ]
})
export class DashModule {
}
