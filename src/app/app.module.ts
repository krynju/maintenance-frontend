import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: '', pathMatch: 'prefix', redirectTo: 'app/dashboard'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {
    path: 'app', children: [
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    ]
  }

]; // todo add canActivate with guard that redirects to login if not logged in

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})


export class AppModule { }
