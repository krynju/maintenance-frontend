import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {LoginRoutingModule} from './login-routing.module';
import {PageComponent} from './page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class LoginModule {
}
