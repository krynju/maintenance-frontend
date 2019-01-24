import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThPageComponent} from './th-page/th-page.component';

const routes: Routes = [{
  path: '', component: ThPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketHistoryRoutingModule {
}
