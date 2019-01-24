import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FailureListComponent} from '../../shared/components/failure-list/failure-list.component';

const routes: Routes = [
  {path: '', component: FailureListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailureHistoryRoutingModule {
}
