import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guard/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'prefix', redirectTo: 'app/dashboard'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'app', /*canActivate: [AuthGuard],*/  loadChildren: './layout/layout.module#LayoutModule'}
]; // todo add canActivate with guard that redirects to login if not logged in


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    )],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
