import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FhPageComponent} from './fh-page/fh-page.component';

const routes: Routes = [{path: '', component: FhPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailureHistoryRoutingModule {
}
