import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'ticket-logs', loadChildren: './ticket-history/ticket-history.module#TicketHistoryModule'},
      {path: 'failure-logs', loadChildren: './failure-history/failure-history.module#FailureHistoryModule'},
      {path: 'ticket/:id', component: TicketDetailComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
